import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDDgC7Rwq4CSkPjwLP-JLlXQ4SigEdDnEU",
  authDomain: "ecowater-b07ef.firebaseapp.com",
  projectId: "ecowater-b07ef",
  storageBucket: "ecowater-b07ef.appspot.com",
  messagingSenderId: "196028804031",
  appId: "1:196028804031:web:c4594ad350e00829f38f0a"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

