import { atom } from 'jotai'

const getFromLocalStorage = (key: string): string[] => {
  const storedValue = localStorage.getItem(key)
  return storedValue ? JSON.parse(storedValue) : []
}

const setToLocalStorage = (key: string, value: string[]) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const LOCAL_STORAGE_LIKED_KEY = 'likedItems'
const LOCAL_STORAGE_DISLIKED_KEY = 'dislikedItems'

export const likedItemsBaseAtom = atom<string[]>(
  getFromLocalStorage(LOCAL_STORAGE_LIKED_KEY)
)
export const dislikedItemsBaseAtom = atom<string[]>(
  getFromLocalStorage(LOCAL_STORAGE_DISLIKED_KEY)
)

export const likedItemsAtom = atom(
  (get) => get(likedItemsBaseAtom),
  (get, set, update: string) => {
    const currentLiked = get(likedItemsBaseAtom)
    const currentDisliked = get(dislikedItemsBaseAtom)

    const updatedDisliked = currentDisliked.filter((item) => item !== update)
    set(dislikedItemsBaseAtom, updatedDisliked)
    setToLocalStorage(LOCAL_STORAGE_DISLIKED_KEY, updatedDisliked)

    const updatedLiked = currentLiked.includes(update)
      ? currentLiked.filter((item) => item !== update)
      : [...currentLiked, update]
    set(likedItemsBaseAtom, updatedLiked)
    setToLocalStorage(LOCAL_STORAGE_LIKED_KEY, updatedLiked)
  }
)

export const dislikedItemsAtom = atom(
  (get) => get(dislikedItemsBaseAtom),
  (get, set, update: string) => {
    const currentDisliked = get(dislikedItemsBaseAtom)
    const currentLiked = get(likedItemsBaseAtom)

    const updatedLiked = currentLiked.filter((item) => item !== update)
    set(likedItemsBaseAtom, updatedLiked)
    setToLocalStorage(LOCAL_STORAGE_LIKED_KEY, updatedLiked)

    const updatedDisliked = currentDisliked.includes(update)
      ? currentDisliked.filter((item) => item !== update)
      : [...currentDisliked, update]
    set(dislikedItemsBaseAtom, updatedDisliked)
    setToLocalStorage(LOCAL_STORAGE_DISLIKED_KEY, updatedDisliked)
  }
)
