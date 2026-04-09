// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dora-ai-yt.firebaseapp.com",
  projectId: "dora-ai-yt",
  storageBucket: "dora-ai-yt.firebasestorage.app",
  messagingSenderId: "284692421181",
  appId: "1:284692421181:web:de1a365c39b7aaaf6c6854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// yaha se start hai
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

// ✅ IMPORTANT LINE
provider.setCustomParameters({
  prompt: "select_account"
});