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
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnsRia4APVSeacc0mqb4WTBZwwg7NAgWM",
  authDomain: "linkedin-clone-6.firebaseapp.com",
  projectId: "linkedin-clone-6",
  storageBucket: "linkedin-clone-6.firebasestorage.app",
  messagingSenderId: "559687341041",
  appId: "1:559687341041:web:c9b691d7378f79dad0aa50",
  measurementId: "G-TPM03MEE3Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { 
  auth, 
  provider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  db,
  doc,
  setDoc,
  getDoc
};
