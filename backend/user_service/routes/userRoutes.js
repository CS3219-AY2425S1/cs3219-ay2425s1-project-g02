const express = require('express');
const authenticateToken = require('../middleware/authenticateToken'); // Import the authentication middleware
const {
  loginUser,
  logoutUser,
  checkSession,
  deleteAccount,
} = require('../controllers/userController');
const router = express.Router();

// Login Route (no authentication required)
router.post('/login', loginUser);

// Logout Route (authentication required)
router.post('/logout', authenticateToken, logoutUser);

// Check Session Route (authentication required)
router.get('/check_session', authenticateToken, checkSession);

// Delete Account Route (authentication required)
router.delete('/delete_account', authenticateToken, deleteAccount);

// Check Session Route (authentication required)
router.post('/verify-token', authenticateToken, (req, res) => {
  // Respond with user data if the session is valid
  res.status(200).json({ user: req.user });
});

module.exports = router;
