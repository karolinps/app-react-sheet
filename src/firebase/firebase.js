import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyAIuy4ddteS7fa3FaziDeOGiMZLASgZv3E",
  // authDomain: "authentication-6ca7d.firebaseapp.com",
  // projectId: "authentication-6ca7d",
  // storageBucket: "authentication-6ca7d.appspot.com",
  // messagingSenderId: "159282770110",
  // appId: "1:159282770110:web:7aa2c2034a871db8066eef",
  // measurementId: "G-RLKY0FVJ3S",
  apiKey: "AIzaSyAbuIdzMt-ICvDWcafKCYjtJx_WbFvped8",
  authDomain: "exop-25b53.firebaseapp.com",
  projectId: "exop-25b53",
  storageBucket: "exop-25b53.appspot.com",
  messagingSenderId: "532749652693",
  appId: "1:532749652693:web:2fbe4fd011a33c8185c85c",
  measurementId: "G-M8445283CM",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
export { firebase, auth, providerGoogle };
