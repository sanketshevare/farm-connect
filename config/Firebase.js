import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDGIjQLRFvCuqrIbPorhLIhzIhCGJwPps",
  authDomain: "farm-connect-a2669.firebaseapp.com",
  projectId: "farm-connect-a2669",
  storageBucket: "farm-connect-a2669.appspot.com",
  messagingSenderId: "441993903725",
  appId: "1:441993903725:web:92b5337ab638ea9c8d8964",
  measurementId: "G-12FV0GCEKS"
};


if (firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

export {firebase};