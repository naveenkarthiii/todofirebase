
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ4wvqR_ylh_m45MUW55dglDLZW3HbIc8",
  authDomain: "todo-list-app-574c2.firebaseapp.com",
  databaseURL: "https://todo-list-app-574c2-default-rtdb.firebaseio.com",
  projectId: "todo-list-app-574c2",
  storageBucket: "todo-list-app-574c2.appspot.com",
  messagingSenderId: "779976762695",
  appId: "1:779976762695:web:93eb1031240670f724d862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app);
export const auth =getAuth();