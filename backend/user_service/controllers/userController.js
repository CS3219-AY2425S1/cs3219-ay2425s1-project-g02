const { db, auth } = require("../config/firebaseConfig.js");

// Function to list all users in Firebase Authentication
const listAllUsers = async (req, res) => {
    try {
        console.log("Trying to list users...");
        const listUsersResult = await auth.listUsers(); // Retrieve users from Firebase Auth
        const users = listUsersResult.users.map(userRecord => ({
            uid: userRecord.uid,
            email: userRecord.email || '',
            displayName: userRecord.displayName || 'No Name',
        }));
        
        // Send the mapped users in the response
        res.status(200).json(users);
    } catch (error) {
        console.error('Error listing users:', error);
        res.status(500).send('Error listing users');
    }
}

module.exports = { listAllUsers };
