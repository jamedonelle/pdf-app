import { getApp, getApps, initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1r-Qp-LN8W6QIjq9vlnHA5vH6nXUWA2E",
  authDomain: "pdf-translate-88a98.firebaseapp.com",
  projectId: "pdf-translate-88a98",
  storageBucket: "pdf-translate-88a98.appspot.com",
  messagingSenderId: "385985965086",
  appId: "1:385985965086:web:2f237c91e30c208678520f",
  measurementId: "G-ZLSY4EC11G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };