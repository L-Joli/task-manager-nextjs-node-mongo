# Frontend - Task Manager

This is the frontend part of the Task Manager fullstack application, built with **Next.js** and **React**. It includes the user interface for managing tasks and communicates with the backend server via API calls.

## Features

- Built with Next.js
- Utilizes React for building the user interface
- Styled with Tailwind CSS for a modern and responsive design
- Includes custom hooks for managing tasks and interacting with the backend API

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- Docker (optional, for Docker setup)

### Configuration
- API URL: Ensure the `NEXT_PUBLIC_REACT_APP_API_URL` environment variable is set to point to your backend server. Create a `.env` file in the `client/` directory with the following content:
    ```bash
    NEXT_PUBLIC_REACT_APP_API_URL=http://localhost:5000
    ```
- You can also refer to the `client/env_sample` file

### Running the App - using npm

1. Navigate to `/client` Directory
2. Install Dependencies
    ```bash
    npm install
3. Running the Development Server
    ```bash
    npm run dev
    ```

### Running the App - using Docker (Optional)
1. Navigate to `/client` Directory
2. Start the Project
    ```bash
    npm run docker:start
    ```