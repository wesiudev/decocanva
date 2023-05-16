import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
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

//images

const imagesRef = collection(db, "images");

async function getAllImages(setUserImages) {
  const response = await getDocs(imagesRef);
  const images = response.docs.map((doc) => doc.data());
  setUserImages(images);
}

async function getUserImages(email) {
  const filter = query(imagesRef, where("author", "==", email));
  const response = await getDocs(filter);
  const images = response.docs.map((doc) => doc.data());
  return images;
}

async function addImage(req) {
  await addDoc(imagesRef, req);
}

//users
const usersRef = collection(db, "users");
async function getUser(req) {
  const filter = query(usersRef, where("email", "==", req.email));
  const response = await getDocs(filter);
  const user = response.docs.map((doc) => doc.data());
  if (user[0]?.email === req.email) {
    return user[0];
  } else if (!user.length) {
    const accountHistory = [
      { creationTime: Date.now(), action: "Joined decocanva" },
    ];
    const newUser = {
      email: req.email,
      hasPlan: false,
      balance: 300,
      tutorialStep: 0,
      accountHistory,
      isPrivate: true,
      isVerified: false,
      displayName: req.displayName,
    };
    await addDoc(usersRef, newUser);
    const response = await getDocs(filter);
    const user = response.docs.map((doc) => doc.data());
    return user[0];
  }
}
//\\///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/
export {
  //providers
  provider,
  storage,
  auth,
  //images
  getAllImages,
  getUserImages,
  addImage,
  //users
  getUser,
};
