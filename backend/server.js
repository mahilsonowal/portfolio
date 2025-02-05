const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoUri = process.env.MONGO_URI

if (!mongoUri) {
  console.error('MONGO_URI is not defined in the .env file');
  process.exit(1); // Exit the application if MONGO_URI is not set
}

mongoose.connect(mongoUri, {})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

console.log('Current Working Directory:', process.cwd());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});