# SHOW ME A MOVIE

## Link
https://showmeamovie.netlify.app/

## Overview

SHOW ME A MOVIE is an application that works like a "Tinder" for movies and TV series. Initially, users are presented with a form containing several questions about the type of content they want to watch and their current mood. There is also a button to generate additional questions, which users can answer. These questions are dynamically generated using the Gemini API.

After answering, a prompt is sent to the Gemini API, which returns three suggestions. An interface is then displayed where users can like, dislike, or view more information about the suggested movie/series. These details are also retrieved from the Gemini API.

From there, users can request more recommendations based on their current profile or start over. Every time users interact with the recommendations (like or dislike), this information is saved locally and used to refine the prompts, tailoring recommendations more accurately to the user's preferences.

## Technologies Used

- **Vite**
- **React**
- **TypeScript**
- **CSS**
- **Gemini API**
- **MUI**

## How to Configure the Project

1. Add a `.env` file to the project root.
2. Include the following key in the `.env` file:
   ```
   VITE_API_KEY=your_gemini_api_key_here
   ```

## Features

- Interactive questionnaire to gather user preferences.
- Dynamically generated questions using the Gemini API.
- Three movie/TV series suggestions based on user input.
- Option to like, dislike, or view more details about the suggestions.
- Ability to request new recommendations or start over.
- Locally saved user interactions to refine future recommendations.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DrZanuff/show-me-a-movie.git
   ```
2. Navigate to the project directory:
   ```bash
   cd show-me-a-movie
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:PORT`.

## Usage

1. Fill out the initial form with questions about your preferences and current mood.
2. Generate additional questions if needed.
3. Submit your answers to receive three movie/TV series recommendations.
4. Interact with the suggestions (like, dislike, view more details).
5. Request more recommendations based on your refined profile or restart the process.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Powered by the Gemini API for dynamic recommendations.
- Built with Vite, React, and TypeScript for a seamless development experience.
