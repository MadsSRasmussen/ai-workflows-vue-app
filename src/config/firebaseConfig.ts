import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-I7BPFaPWulLDHJ4Z69vjEW81RUa0Daw",
    authDomain: "ai-workflows-development.firebaseapp.com",
    projectId: "ai-workflows-development",
    storageBucket: "ai-workflows-development.appspot.com",
    messagingSenderId: "366482061037",
    appId: "1:366482061037:web:caa568eb308c6715487ee4",
    measurementId: "G-WSGCDJD17B"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);