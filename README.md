# Hilo - A Social Media Application

This repository contains the code for Hilo, a social media application built with React, Vite, and Chakra UI on the frontend, and Node.js, Express, and MongoDB on the backend.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Hilo is a social media application that allows users to connect with each other, share posts, and engage in discussions. It provides a platform for users to express themselves, discover new content, and build communities.

## Features

-   User authentication (signup, login, logout)
-   User profile creation and updates
-   Posting and sharing content (text and images)
-   Liking and unliking posts
-   Replying to posts
-   Following and unfollowing users
-   Displaying a feed of posts from followed users
-   User profile page displaying user's posts
-   Responsive design for various devices

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [npm](https://www.npmjs.com/) (Node Package Manager) or [Yarn](https://yarnpkg.com/)
-   [MongoDB](https://www.mongodb.com/) (a cloud account like MongoDB Atlas, or a local installation)
-   [Cloudinary](https://cloudinary.com/) (for image storage and management)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd hilo
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Configure backend environment variables:**

    Create a `.env` file in the `backend` directory and add the following variables:

    ```
    PORT=5000
    MONGO_URI=<Your MongoDB Connection String>
    JWT_SECRET=<Your JWT Secret>
    CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
    CLOUDINARY_API_KEY=<Your Cloudinary API Key>
    CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
    ```

4.  **Start the backend server:**

    ```bash
    npm run dev
    ```

5.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

6.  **Start the frontend development server:**

    ```bash
    npm run dev
    ```

    The frontend will be running at `http://localhost:3000`.

## Directory Structure
hilo/
├── backend/ # Backend code
│ ├── controllers/ # Express route handlers
│ ├── db/ # Database connection setup
│ ├── middlewares/ # Custom Express middlewares
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── server.js # Main server file
│ └── package.json # Backend dependencies
├── frontend/ # Frontend code
│ ├── src/ # React components and assets
│ ├── public/ # Static assets
│ ├── App.jsx # Main app component
│ └── package.json # Frontend dependencies
├── .gitignore # Specifies intentionally untracked files that Git should ignore


## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

[Specify the license under which your project is licensed]

---

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
