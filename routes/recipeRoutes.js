const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/recipes', async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'An error occurred while fetching recipes' });
    }
});

module.exports = router;
