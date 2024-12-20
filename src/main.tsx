import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/App/index'

import '@/languages/i18n'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
)
