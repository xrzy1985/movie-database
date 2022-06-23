import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const __key__ = "{\"apiKey\": \"AIzaSyCUWmkooTsrXVagXY0qXxWKfsft_6Pi77Q\", \"authDomain\": \"movie-database-8e789.firebaseapp.com\", \"projectId\": \"movie-database-8e789\", \"storageBucket\": \"movie-database-8e789.appspot.com\", \"messagingSenderId\": \"875132263224\", \"appId\": \"1:875132263224:web:b3ad416bf39becaf1b3fcd\", \"measurementId\": \"G-SQKD044VTB\"}";

const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG || __key__);

const firebase = initializeApp(config);

export const db = getFirestore(firebase);