const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.status(401).json({ message: 'Token required' });

  try {
    // Verify the token with the user service.
    // When running in a containerized environment, we cannot directly access host port mappings without environment variables.
    // Therefore, unless we choose to use environment variables, we must choose between using 'http://user_service:5001/verify-token' for production or 'http://localhost:5001/verify-token' for development.
    // In this implementation, we opt for the production URL, which means our development ways of setting up won't work with the question service anymore.
    // Consequently, to run the application, we must use 'docker-compose up -d' instead of starting individual containers or using development commands like 'npm run dev' for the frontend and 'node server.js' for the backend.
    const response = await fetch('http://user_service:5001/verify-token', { 
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const userData = await response.json(); 
      req.user = userData; // Store user data in request
      next();
    } else {
      const errorData = await response.json(); // Get the error response
      res.status(response.status).json({ message: errorData.message || 'Invalid Token' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Question Service Server Error' });
  }
};

module.exports = authenticateToken;
