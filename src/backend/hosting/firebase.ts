// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIRBASE,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_FIREBASE,
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);