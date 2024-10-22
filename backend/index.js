const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const userRoutes = require('./routes/userRoutes');
const problemRoutes = require('./routes/problemRoutes');

app.use('/api/users', userRoutes);
app.use('/api/problems', problemRoutes);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
