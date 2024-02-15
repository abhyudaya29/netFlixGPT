export const LOGO = "https://images8.alphacoders.com/115/1152301.png";
export const USER_AVTAR = "https://avatars.githubusercontent.com/u/90976445?v=4";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_TMBD_KEY // Access TMBD key
  }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w200";
export const BG_URL = "https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg";

// Use correct import based on framework:
export const OPEN_AI_KEY =import.meta.env.VITE_REACT_APP_OPENAI_KEY
  // OR
  // For Create React App:
  // process.env.REACT_APP_OPENAI_KEY;
