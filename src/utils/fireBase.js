// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWplixUK9NUGsOqtUbvXAe4_kHdWq0BmE",
  authDomain: "netflixgpt-9d928.firebaseapp.com",
  projectId: "netflixgpt-9d928",
  storageBucket: "netflixgpt-9d928.appspot.com",
  messagingSenderId: "257154996624",
  appId: "1:257154996624:web:23f715c8b51ce037e23b15",
  measurementId: "G-BTCK5XSYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);