// review.js

const express = require('express');
const router = express.Router();
const { getReviews, addReview } = require('../controllers/reviewController');

// GET /api/recipes/:id/reviews route
router.get('/:id/reviews',getReviews);

// POST /api/recipes/:id/reviews route
router.post('/:id/reviews',addReview);

module.exports = router;
