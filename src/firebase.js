import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpz32XrYineFiB4sl0hpksyDYO7MCUp-s",
  authDomain: "forgot-password-ffbfc.firebaseapp.com",
  projectId: "forgot-password-ffbfc",
  storageBucket: "forgot-password-ffbfc.firebasestorage.app",
  messagingSenderId: "629677440704",
  appId: "1:629677440704:web:8580577e9e69ac72fa3725",
  measurementId: "G-SYF297ZE3B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
