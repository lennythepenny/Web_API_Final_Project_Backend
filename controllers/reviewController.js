// reviewController.js

// Assuming you have a Review model imported
const Review = require('../models/Review');

// Function to get reviews for a specific recipe
exports.getReviews = async (req, res) => {
    try {
        const recipeId = req.params.id;
        // Assuming you have a method in your Review model to fetch reviews by recipeId
        const reviews = await Review.find({ recipeId });
        res.status(200).json({ reviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'An error occurred while fetching reviews' });
    }
};

// Function to add a review to a recipe
exports.addReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, comment } = req.body;
        // Assuming you have a method in your Review model to create a new review
        const newReview = new Review({ recipeId: id, rating, comment });
        const savedReview = await newReview.save();
        res.status(201).json({ message: 'Review added successfully', review: savedReview });
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ error: 'An error occurred while adding review' });
    }
};
