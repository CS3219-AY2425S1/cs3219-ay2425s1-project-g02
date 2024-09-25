const express = require('express');
const authenticateToken = require('../middleware/authenticateToken'); // Import the authentication middleware
const {
  loginUser,
  logoutUser,
  checkSession,
  deleteAccount,
} = require('../../user_service/controllers/userController');

const router = express.Router();

// Login Route (no authentication required)
router.post('/login', loginUser);

// Logout Route (authentication required)
router.post('/logout', authenticateToken, logoutUser);

// Check Session Route (authentication required)
router.get('/check_session', authenticateToken, checkSession);

// Delete Account Route (authentication required)
router.delete('/delete_account', authenticateToken, deleteAccount);

module.exports = router;
