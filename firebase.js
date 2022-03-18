import firebase from 'firebase';
// import { initializeApp, getApps  } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"




const firebaseConfig = {

  apiKey: "AIzaSyDI8INE9YX34-NyF4mkkYTlYj81A-ZX8Vo",

  authDomain: "fbclone-d826a.firebaseapp.com",

  projectId: "fbclone-d826a",

  storageBucket: "fbclone-d826a.appspot.com",

  messagingSenderId: "1011197238839",

  appId: "1:1011197238839:web:195ed38a0d5a160b4629b2",

};



// if (!getApps().length) {
  
// }

// const app = initializeApp(firebaseConfig)


// const db = getFirestore(app);


// const storage = getStorage(app)

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

const storage = firebase.storage()

export { db, storage }