import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// config for account creation/auth
export const firebaseConfig = {
	apiKey: "AIzaSyCsHIrpIDMmmCYY802GDF8aA7lcJ1Aa40U",
	authDomain: "peerprep-g02.firebaseapp.com",
	projectId: "peerprep-g02",
	storageBucket: "peerprep-g02.appspot.com",
	messagingSenderId: "1079323726684",
	appId: "1:1079323726684:web:56bd9bfdad2291e7ed6799",
	measurementId: "G-6HZXZE70J3",
};

const app = initializeApp(firebaseConfig);
export const loginAuth = getAuth(app);
