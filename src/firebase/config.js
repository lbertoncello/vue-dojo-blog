import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB8OAG3JP7uNBAZKS-9Ern7iEp8aeARet4",
  authDomain: "udemy-vue-firebase-sites-599e4.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-599e4",
  storageBucket: "udemy-vue-firebase-sites-599e4.appspot.com",
  messagingSenderId: "1049648309488",
  appId: "1:1049648309488:web:b7d11a77b4403b6f2dce35",
  measurementId: "G-S2F4RMFVZH"
};

// Init Firebase
firebase.initializeApp(firebaseConfig)

// Init Firestore Service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }