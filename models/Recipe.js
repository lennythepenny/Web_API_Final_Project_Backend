// models/Recipe.js

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredientLines: {
    type: [String],
    required: true,
  },
  dishType: {
    type: [String],
    required: true,
  },
  // Add more fields as needed
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
