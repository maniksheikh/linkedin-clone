import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLE60xdd5n3Y8Ogh6Qfj0sT1WFhyf6wFQ",
  authDomain: "linkedin-clone-ff47f.firebaseapp.com",
  projectId: "linkedin-clone-ff47f",
  storageBucket: "linkedin-clone-ff47f.firebasestorage.app",
  messagingSenderId: "191922326361",
  appId: "1:191922326361:web:efc7a1d0643064d2405a48",
  measurementId: "G-ZN1ZFYY7X2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { 
  auth, 
  provider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
};
