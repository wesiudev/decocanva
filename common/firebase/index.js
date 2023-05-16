import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

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

const db = getFirestore(app);

const storage = getStorage(app);

//db interactions

const collectionRef = collection(db, "images");

async function getAllImages(setUserImages) {
  const response = await getDocs(collectionRef);
  const images = response.docs.map((doc) => doc.data());
  setUserImages(images);
}

async function getUserImages(userEmail) {
  const filter = query(collectionRef, where("author", "==", userEmail));
  const response = await getDocs(filter);
  const images = response.docs.map((doc) => doc.data());
  return images;
}

async function addImage(req) {
  await addDoc(collectionRef, req);
}

export { provider, storage, auth, getAllImages, getUserImages, addImage };
