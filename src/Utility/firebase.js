
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth';
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADU6sTbqiZvW11oM8rrTOHL3t2JHI3Wmo",
  authDomain: "new-clone-ca20c.firebaseapp.com",
  projectId: "new-clone-ca20c",
  storageBucket: "new-clone-ca20c.firebasestorage.app",
  messagingSenderId: "876848480537",
  appId: "1:876848480537:web:e8fbaa8379f12783e0c588"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore()

