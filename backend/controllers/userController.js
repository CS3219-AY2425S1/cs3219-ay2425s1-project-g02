//const bcrypt = require('bcryptjs');
//const { db } = require('../config/firebaseConfig');

// Login Controller
/*const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Save a test email and password to Firestore (if not already saved)
  const testEmail = 'abc@gmail.com';
  const testPassword = bcrypt.hashSync('abc123', bcrypt.genSaltSync());
  
  try {
    const testUserDoc = await db.collection('users').doc(testEmail).get();
    if (!testUserDoc.exists) {
      await db.collection('users').doc(testEmail).set({ password: testPassword });
    }
  } catch (error) {
    return res.status(500).send('Error initializing test user: ' + error.message);
  }
  
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  try {
    const userDoc = await db.collection('users').doc(email).get();
    
    if (!userDoc.exists) {
      return res.status(400).json({ success: false, message: 'Invalid Email' });
    }

    const user = userDoc.data();
    const passwordValid = bcrypt.compareSync(password, user.password);
    if (!passwordValid) {
      return res.status(400).json({ success: false, message: 'Invalid Password' });
    }

    req.session.user = email;
    res.json({ success: true, message: 'Login successful' });

  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Logout Controller
const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Logout failed' });
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
};

// Check Session Controller
const checkSession = (req, res) => {
  if (req.session.user) {
    return res.json({ success: true, message: 'User is logged in' });
  } else {
    return res.json({ success: false, message: 'No active session' });
  }
};

// Delete Account Controller
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

const deleteAccount = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  try {
    const userDoc = await db.collection('users').doc(email).get();
    
    if (!userDoc.exists) {
      return res.status(400).json({ success: false, message: 'Invalid Email' });
    }

    const user = userDoc.data();
    const passwordValid = bcrypt.compareSync(password, user.password);
    if (!passwordValid) {
      return res.status(400).json({ success: false, message: 'Invalid Password' });
    }

    await db.collection('users').doc(email).delete();
    res.json({ success: true, message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  deleteAccount,
};
 */

// controllers/userController.js

const admin = require('../config/firebaseConfig'); // Import Firebase config for admin SDK

// Placeholder function for user login (handled on the frontend with Firebase)
const loginUser = async (req, res) => {
  res.status(200).json({ message: 'Login handled on the client side' });
};

// Placeholder function for user logout (handled on the frontend with Firebase)
const logoutUser = async (req, res) => {
  res.status(200).json({ message: 'Logout handled on the client side' });
};

// Placeholder function for checking user session (handled on the frontend with Firebase)
const checkSession = async (req, res) => {
  res.status(200).json({ message: 'Session check handled on the client side' });
};

// Placeholder function for deleting user account (handled on the frontend with Firebase)
const deleteAccount = async (req, res) => {
  res.status(200).json({ message: 'Account deletion handled on the client side' });
};

module.exports = {
  loginUser,
  logoutUser,
  checkSession,
  deleteAccount
};
