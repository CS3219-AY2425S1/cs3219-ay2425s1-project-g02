const io = require('socket.io-client');

// Connect to the Socket.IO server
const socket = io('http://localhost:5001', {
  transports: ['websocket'], // Specify websocket transport
  withCredentials: false
});

// Listen for connection event
socket.on('connect', () => {
  console.log('Connected to server:', socket.id);

  // Join a specific session (you can change 'session1' to any ID)
  socket.emit('joinSession', 'session1');

  // Simulate sending a code update after a delay
  setTimeout(() => {
    const codeUpdate = {
      sessionId: 'session1',
      code: 'console.log("Hello, world!");'
    };
    socket.emit('codeUpdate', codeUpdate);
    console.log('Code update sent:', codeUpdate.code);
  }, 2000); // Wait 2 seconds before sending

  // Listen for code updates
  socket.on('codeUpdated', (data) => {
    console.log('Received code update:', data.code);
  });
});

// Handle socket errors
socket.on('error', (err) => {
  console.error('Socket error:', err);
});

// Handle disconnect
socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
