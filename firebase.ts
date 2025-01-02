import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAna46MR7VTsfvoIh1DhcnIRzdsAfU_fWw",
  authDomain: "shopper-63da8.firebaseapp.com",
  projectId: "shopper-63da8",
  storageBucket: "shopper-63da8.firebasestorage.app",
  messagingSenderId: "186999931477",
  appId: "1:186999931477:web:99a3ff0c23d2c769f28adc"npn
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
