import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFv0skzYXOe0RjdSy3kLHVqq6luSL2Kvo",
  authDomain: "messenger-736a5.firebaseapp.com",
  databaseURL: "https://messenger-736a5.firebaseio.com",
  projectId: "messenger-736a5",
  storageBucket: "messenger-736a5.appspot.com",
  messagingSenderId: "462657405231",
  appId: "1:462657405231:web:fa6cb949ca70f52e5e61da",
  measurementId: "G-8FBVY81HMH"
});


const db = firebaseApp.firestore();

export default db;