import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-3uDvUmAVSGoqoiXhw-E9ISSQ0Agcnd4",
  authDomain: "adena-jewelry.firebaseapp.com",
  projectId: "adena-jewelry",
  storageBucket: "adena-jewelry.firebasestorage.app",
  messagingSenderId: "1025313657298",
  appId: "1:1025313657298:web:4756efa1a3afa1c44d780b",
  measurementId: "G-C2PVXMJ02T",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
