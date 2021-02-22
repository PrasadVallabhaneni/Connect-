import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAg5PWlUl9DLI7T1LNSiIsEx6MhZi2n_pk",
  authDomain: "connectplus-8b0c7.firebaseapp.com",
  databaseURL: "https://connectplus-8b0c7-default-rtdb.firebaseio.com",
  projectId: "connectplus-8b0c7",
  storageBucket: "connectplus-8b0c7.appspot.com",
  messagingSenderId: "856195552049",
  appId: "1:856195552049:web:b45a73eb8357b2d0c61610",
  measurementId: "G-XPPEKTLQ9N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;