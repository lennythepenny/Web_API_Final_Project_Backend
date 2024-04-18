// recipeRoutes.js

const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const { createRecipe, getReviews, addReview, updateRecipe } = require('../controllers/recipeController');

// POST /api/recipes route
router.post('/', isAuthenticated, createRecipe);

// GET /api/recipes/:id/reviews route
router.get('/:id/reviews', isAuthenticated, getReviews);

// POST /api/recipes/:id/reviews route
router.post('/:id/reviews', isAuthenticated, addReview);

// PUT /api/recipes/:title route
router.put('/:title', isAuthenticated, updateRecipe);

module.exports = router;
