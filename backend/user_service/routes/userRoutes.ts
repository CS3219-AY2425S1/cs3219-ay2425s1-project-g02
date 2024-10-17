import { getUsers, listAllUsers, listUsersPaginated } from '../controllers/userController';
const express = require('express');
const authenticateToken = require('../middleware/authenticateToken'); // Import the authentication middleware
const router = express.Router();

// Check Session Route (authentication required)
router.post('/verify-token', authenticateToken, (req, res) => {
  // Respond with user data if the session is valid
  res.status(200).json({ user: req.user });
});

// // Route to get all users
// router.get('/admin/users', getUsers);

// Route to list all users (can be used for admin functionality)
router.get('/admin/users', listAllUsers);

// Route for paginated user listing
// router.get('/users/paginated', async (req, res) => {
//   const { nextPageToken } = req.query;
//   try {
//     const users = await listUsersPaginated(nextPageToken as string);
//     res.json(users);
//   } catch (error) {
//     res.status(500).send('Error fetching paginated users');
//   }
// });

export default router;