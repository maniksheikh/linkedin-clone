import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhhj-4A6Q30FVtRCv21tepW__JiA_QrSo",
  authDomain: "linkedin-clone-dd96f.firebaseapp.com",
  projectId: "linkedin-clone-dd96f",
  storageBucket: "linkedin-clone-dd96f.appspot.com",
  messagingSenderId: "940787575292",
  appId: "1:940787575292:web:9b94371aab0e5663f02a79",
  measurementId: "G-DSRSCCY4P6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, onAuthStateChanged, signOut };
