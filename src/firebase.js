import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmAkqMoIrLqD8-QRg7wp_54SGDUomvD4k",
  authDomain: "twitter-clone-146b0.firebaseapp.com",
  databaseURL: "https://twitter-clone-146b0.firebaseio.com",
  projectId: "twitter-clone-146b0",
  storageBucket: "twitter-clone-146b0.appspot.com",
  messagingSenderId: "289310885213",
  appId: "1:289310885213:web:8b036d67c860c0932ad4b4",
  measurementId: "G-SB4JXSN4NJ"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();

export default db;

