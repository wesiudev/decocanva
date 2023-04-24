import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);

//db interactions

const collectionRef = collection(db, "images");
async function getAllImages() {
  const imagesSnapshot = await getDocs(collectionRef);
  const imageList = imagesSnapshot.docs.map((doc) => doc.data());
  console.log(imageList);
  return imageList;
}

async function addImage(req) {
  const imagesSnapshot = await addDoc(collectionRef, req);
  const imageList = imagesSnapshot.docs.map((doc) => doc.data());
  console.log(imageList);
  return imageList;
}

export { provider, auth, getAllImages };
