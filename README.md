# Netflix Clone 🎬

A full-featured Netflix UI clone built with React, TypeScript, Tailwind CSS, Redux Toolkit, and The Movie Database (TMDb) API. This app allows users to browse popular, trending, and top-rated movies, watch trailers, and search content — all styled to closely resemble Netflix's interface.

## 🚀 Features

-   🎥 Browse movies by categories (Trending, Popular, Top Rated)
-   🔍 Search for movies
-   ▶️ Watch YouTube trailers
-   🧠 Smart trailer selection (official, YouTube only)
-   🧱 Modular architecture with reusable components
-   🌙 Dark theme (Netflix style)
-   🔄 Loading states and error handling
-   📱 Responsive UI

## 🛠 Tech Stack

-   **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
-   **State Management**: Redux Toolkit
-   **API**: [The Movie Database (TMDb) API](https://developer.themoviedb.org/docs)
-   **Custom Hooks**: `useYoutubeTrailer` for fetching trailers
-   **Routing**: React Router (if used)
-   **Icons**: React Icons or Lucide

## 📁 Folder Structure

src/
│
├── app/ # Redux store setup
├── components/ # Reusable UI components
├── features/ # Feature slices (e.g., movies)
├── hooks/ # Custom hooks (e.g., useYoutubeTrailer)
├── pages/ # Page components (e.g., Home, MovieDetail)
├── styles/ # Global styles and Tailwind config
├── utils/ # Constants and helper functions
│ └── constants.ts
├── types/ # TypeScript interfaces
├── App.tsx # Root app component
└── main.tsx # App entry point

bash
Copy
Edit

## 🔐 API Key

This project uses TMDb's API. You must provide your own API key in `utils/constants.ts`.

```ts
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer <YOUR_TMDB_BEARER_TOKEN>',
  },
};
You can get your TMDb token from https://www.themoviedb.org/settings/api

🧪 Custom Hook: useYoutubeTrailer
Fetches and returns the official YouTube trailer key for a given movie ID.

ts
Copy
Edit
const { trailerKey, loading } = useYoutubeTrailer(movieId);
🧰 Setup Instructions
Clone the repo

bash
Copy
Edit
git clone https://github.com/pritamKundu1993/netflix-clone
cd netflix-clone
Install dependencies

bash
Copy
Edit
npm install
Add your TMDb API token

Go to src/utils/constants.ts

Replace the Authorization header with your own TMDb bearer token

Start the app

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser 🚀

📸 Screenshots
Add some screenshots or a Loom video here if possible

🙌 Acknowledgements
TMDb API

Netflix for design inspiration

Shadcn UI

Tailwind CSS

React

📜 License
This project is for learning and demo purposes only. Netflix is a registered trademark of Netflix, Inc.

yaml
Copy
Edit

---

Let me know if you want me to generate badges, add deployment instructions (e.g., Vercel/Netlify), o
```
