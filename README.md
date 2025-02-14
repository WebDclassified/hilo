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



---


