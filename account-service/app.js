const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Example User data stored in memory for testing purposes
// Replace with firebase later
const usersDB = {
    'user1@example.com': {
        password: bcrypt.hashSync('password123', 10)
    }
};

// Login Route
router.post('/login', (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const user = usersDB[email];
  
  if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid Email' });
  }

  const passwordValid = bcrypt.compareSync(password, user.password);
  
  if (!passwordValid) {
      return res.status(400).json({ success: false, message: 'Invalid Password' });
  }

  // Save the user's session
  req.session.user = email;
  res.json({ success: true, message: 'Login successful' });
});


// Logout Route
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Logout failed' });
        }
        res.json({ success: true, message: 'Logged out successfully' });
    });
});

// Check Session Route
router.get('/check_session', (req, res) => {
    if (req.session.user) {
        return res.json({ success: true, message: 'User is logged in' });
    } else {
        return res.json({ success: false, message: 'No active session' });
    }
});

module.exports = router;
