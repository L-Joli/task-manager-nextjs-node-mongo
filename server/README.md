# Backend - Task Manager

This is the backend part of the Task Manager fullstack application, built with **Node.js**, **Express**, and **MongoDB**. It provides the **RESTful** API endpoints for managing tasks and integrates with the frontend client.

## Features

- **Express:** Handles HTTP requests and routing.
- **Mongoose:** Manages interactions with MongoDB.
- **Jest:** Provides testing capabilities for the backend.
- **Docker:** Optional setup for containerized development.

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- Docker (optional, for Docker setup)

### Configuration

- API URL: Ensure the `NEXT_PUBLIC_REACT_APP_API_URL` environment variable is set to point to your backend server. Create a `.env` file in the `client/` directory with the following content:
    ```bash
    MONGODB_URI={your_mongodb_uri}
    ```
- You can also refer to the `server/env_sample` file

### Running the Server - using npm

1. Navigate to `/server` Directory
2. Install Dependencies
    ```bash
    npm install
3. Running the Development Server
    ```bash
    npm run dev
    ```
    The server will be available at http://localhost:3001.

### Running the Server - using Docker (Optional)
1. Navigate to `/server` Directory
2. Start the Server
    ```bash
    npm run docker:start
    ```

## API Endpoints
- `GET /tasks`: Retrieve all tasks.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.