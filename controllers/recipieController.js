// recipeController.js

const Recipe = require('../models/Recipe');
const Review = require('../models/Review');

exports.createRecipe = (req, res) => {
    const { recipeId, title, ingredients, instructions, imageUrl } = req.body;
    // Check if title in the request body
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    // Create new Recipe object and save it to the database
    const newRecipe = new Recipe({ recipeId, title, ingredients, instructions, imageUrl });

    newRecipe.save()
        .then(savedRecipe => {
            // Send the newly saved recipe with success response
            res.status(200).json(savedRecipe);
        })
        .catch(error => {
            console.error('Error creating recipe:', error);
            res.status(500).json({ error: 'An error occurred while creating the recipe' });
        });
};

exports.getReviews = (req, res) => {
    const recipeId = req.params.id;
    // Find all reviews with the specified recipeId
    Review.find({ recipeId })
        .then(reviews => {
            res.status(200).json(reviews);
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
            res.status(500).json({ error: 'An error occurred while fetching reviews' });
        });
};

exports.addReview = (req, res) => {
    const recipeId = req.params.id;
    const { rating, review } = req.body;
    const username = req.user.username;

    // Create a new review object and save it to the database
    const newReview = new Review({ recipeId, username, rating, review });

    newReview.save()
        .then(savedReview => {
            res.status(200).json({ message: 'Review created!', review: savedReview });
        })
        .catch(error => {
            console.error('Error creating review:', error);
            res.status(500).json({ error: 'An error occurred while creating the review' });
        });
};

exports.updateRecipe = (req, res) => {
    const { title } = req.params;
    const { ingredients, instructions, imageUrl } = req.body;
    // Check if title in the request parameters
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    // Find recipe from title and update it in the database
    Recipe.findOneAndUpdate({ title: title }, { ingredients, instructions, imageUrl }, { new: true })
        .then(updatedRecipe => {
            res.status(200).json(updatedRecipe);
        })
        .catch(error => {
            console.error('Error updating recipe:', error);
            res.status(500).json({ error: 'An error occurred while updating the recipe' });
        });
};
