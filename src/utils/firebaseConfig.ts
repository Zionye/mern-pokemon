import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-Y67aPM_4NlTzW3zWS4UXgEuGGrmQTo4",
  authDomain: "mern-pokedex.firebaseapp.com",
  projectId: "mern-pokedex",
  storageBucket: "mern-pokedex.appspot.com",
  messagingSenderId: "221202838446",
  appId: "1:221202838446:web:513e92464e3722337b0e3f",
  measurementId: "G-86MQPE8BGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, 'users');
export const pokemonListRef = collection(firebaseDB, 'pokemonList');