// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const { createUserWithEmailAndPassword } = require("firebase/auth");
const { loginAuth } = require('../config/firebaseConfig');

export async function createAccount(email, password) {
    await createUserWithEmailAndPassword(loginAuth, email, password);
}