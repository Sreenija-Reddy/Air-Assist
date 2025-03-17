const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;
const db = require('./db');  // Assuming db.js is in the root of your project

// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from React app
  methods: 'GET,POST',
}));

// Middleware to parse JSON request bodies (add this for POST requests)
app.use(express.json());

// API Route
app.get('/', (req, res) => {
  res.send('Hello, Air Assist!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
