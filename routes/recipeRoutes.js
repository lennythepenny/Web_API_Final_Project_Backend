// recipeRoutes.js

const express = require('express');
const router = express.Router();
const { createRecipe, getReviews, addReview, updateRecipe } = require('../controllers/recipeController');

// POST /api/recipes route
router.post('/',createRecipe);

// GET /api/recipes/:id/reviews route
router.get('/:id/reviews', getReviews);

// POST /api/recipes/:id/reviews route
router.post('/:id/reviews', addReview);

// PUT /api/recipes/:title route
router.put('/:title', updateRecipe);

module.exports = router;
