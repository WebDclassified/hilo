## backend/README.md

```markdown
# Backend for Hilo App

This directory contains the backend code for the Hilo social media application. It is built using Node.js, Express, and MongoDB.

## Technologies Used

-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   JSON Web Tokens (JWT)
-   bcryptjs
-   Cloudinary
-   dotenv
-   cookie-parser

## Key Files

-   `server.js`: Main entry point for the backend server.  Initializes the Express app, connects to the database, configures Cloudinary, and defines routes.
-   `db/connectDB.js`: Handles the connection to the MongoDB database.
-   `models/`: Contains Mongoose models for User and Post data.
-   `controllers/`: Contains the route handlers for user authentication and post management.
-   `routes/`: Defines the API routes for users and posts.

## API Endpoints

### User Routes

-   `POST /api/users/signup`: Registers a new user.
-   `POST /api/users/login`: Logs in an existing user.
-   `POST /api/users/logout`: Logs out the current user.
-   `PUT /api/users/update/:id`: Updates user profile information.
-   `PUT /api/users/follow/:id`: Follows or unfollows a user.
-    `GET /api/users/profile/:query`: Get User Profile using username or userId

### Post Routes

-   `POST /api/posts/create`: Creates a new post.
-   `GET /api/posts/:id`: Retrieves a specific post by ID.
-   `DELETE /api/posts/:id`: Deletes a post.
-   `PUT /api/posts/like/:id`: Likes or unlikes a post.
-   `PUT /api/posts/reply/:id`: Adds a reply to a post.
-   `GET /api/posts/feed`: Retrieves a feed of posts from followed users.
-   `GET /api/posts/user/:username`: Retrieves all posts from specific user

## Environment Variables

The backend requires the following environment variables:

-   `PORT`: The port the server will listen on (e.g., 5000).
-   `MONGO_URI`: The MongoDB connection string.
-   `JWT_SECRET`: A secret key used for signing JSON Web Tokens.
-   `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
-   `CLOUDINARY_API_KEY`: Your Cloudinary API key.
-   `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.

## Running the Backend

1.  Navigate to the `backend` directory: `cd backend`
2.  Install dependencies: `npm install`
3.  Create a `.env` file with the required environment variables.
4.  Start the server: `npm run dev`

The server will start at `http://localhost:<PORT>`.
