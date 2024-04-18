const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipe-finder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
