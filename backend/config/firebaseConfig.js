// This file gets run whenever another file imports it.
// This file sets up and initializes the Firebase Admin SDK with service account credentials.
// It then exports the initialized Firebase Authentication and Firestore instances for use in other modules.
// Documentation can be found here: https://firebase.google.com/docs/firestore/quickstart

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./firebaseCredentials.json'); // Path to your service account key


initializeApp({
  credential: cert(serviceAccount),
});

const auth = getAuth();
const db = getFirestore();

// config for account creation/auth
const firebaseConfig = {
  apiKey: "AIzaSyCsHIrpIDMmmCYY802GDF8aA7lcJ1Aa40U",
  authDomain: "peerprep-g02.firebaseapp.com",
  projectId: "peerprep-g02",
  storageBucket: "peerprep-g02.appspot.com",
  messagingSenderId: "1079323726684",
  appId: "1:1079323726684:web:56bd9bfdad2291e7ed6799",
  measurementId: "G-6HZXZE70J3"
};

const app = initializeApp(firebaseConfig);
const loginAuth = getAuth(app);

module.exports = { auth, db, loginAuth };
