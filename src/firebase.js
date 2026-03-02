import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuG5zRnrSAX86SHBJVsi82UmbexqEOiLk",
  authDomain: "nivesha-stock-trading.firebaseapp.com",
  projectId: "nivesha-stock-trading",
  storageBucket: "nivesha-stock-trading.firebasestorage.app",
  messagingSenderId: "556866390656",
  appId: "1:556866390656:web:93d7776dc2553f99783465",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);