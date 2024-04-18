# Recipe Finder Backend

This is the backend for a recipe finder application. It provides APIs to manage recipes, including fetching recipes, adding new recipes, updating existing recipes, and managing user reviews.

## Features

- **RESTful API**: Provides a RESTful API for managing recipes.
- **Authentication and Authorization**: Uses JWT (JSON Web Tokens) for authentication and authorization of API requests.
- **Database Integration**: Integrates with MongoDB database to store recipe data.
- **Environment Variables**: Uses dotenv for managing environment variables.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for storing recipe data
- **Mongoose**: MongoDB object modeling tool for Node.js
- **dotenv**: Loads environment variables from a .env file into process.env
- **bcryptjs**: Hashing library for securely hashing passwords
- **jsonwebtoken**: JSON Web Token implementation for Node.js
- **cors**: Middleware for handling Cross-Origin Resource Sharing (CORS)
- **axios**: Promise-based HTTP client for making HTTP requests

## Installation

1. Clone this repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file in the root directory and add necessary environment variables (e.g., MongoDB connection URI, JWT secret key)
4. Start the server: `npm start`

## API Documentation

- **GET /recipes**: Fetch all recipes
- **GET /recipes/:id**: Fetch a specific recipe by ID
- **POST /recipes**: Add a new recipe
- **PUT /recipes/:id**: Update an existing recipe
- **DELETE /recipes/:id**: Delete a recipe by ID

For more detailed API documentation, refer to the [API documentation](#) (to be updated).

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
