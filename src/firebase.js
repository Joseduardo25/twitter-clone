import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBb9DI9fBdq4cWz6R59S5TbDPAcDX4pGME",
  authDomain: "twitter-clone-377aa.firebaseapp.com",
  projectId: "twitter-clone-377aa",
  storageBucket: "twitter-clone-377aa.appspot.com",
  messagingSenderId: "296459523718",
  appId: "1:296459523718:web:6a5a614ce49169f214e307",
  measurementId: "G-T0BY1NQ0CM"
};

const firebaseApp = firebase.intializeApp(firebaseConfig)

const db = firebaseApp.fireStore()

export default db