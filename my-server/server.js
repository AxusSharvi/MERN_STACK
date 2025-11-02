require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import DB connection function
const apiRoutes = require('./routes/api'); // Import your new routes file

const app = express();
const PORT = process.env.PORT || 5000;

// --- Connect to Database ---
// We call the function we exported from db.js
connectDB();

// --- Middleware ---
// These are global middleware, so they stay here
app.use(cors());
app.use(express.json());
app.set('json spaces', 2);

// --- Use API Routes ---
// Tell Express to use the 'apiRoutes' file
// for any URL that starts with '/api'
app.use('/api', apiRoutes);

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});