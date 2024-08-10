# Communication-App

## Overview

This is a simple messaging application designed with a focus on simplicity. The frontend is built using React, TypeScript, and Vite, while the backend is powered by Python, Flask, and SQLite3.

## Features

-   User authentication
-   Real-time messaging
-   Simple and clean user interface

## Tech Stack

**Frontend:**

-   React
-   TypeScript
-   Vite

**Backend:** [Repo](https://github.com/TheSaltyNewfie/Communication-App-Backend)

-   Python
-   Flask
-   SQLite3

## Installation

### Prerequisites

-   Node.js
-   Python 3.x
-   SQLite3
-   Podman/Docker

### Frontend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/TheSaltyNewfie/Communication-App
    cd Communication-App
    ```

2. Navigate to the frontend directory and install dependencies:
    ```sh
    cd client
    npm install
    ```
3. Configure the frontend:

    ```jsonc
    {
        "special_names": [
            // Allows for special users
            "TobiasDodge"
        ],
        "special_name_color": "gold", // This can be any color
        "api_endpoint": "https://api.thesaltynewfie.ca" // Change this to your API link
    }
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

### Backend Setup

1. Clone and activate environment:

    ```sh
    git clone https://github.com/thesaltynewfie/communication-app-backend.git

    # cd ...

    pipenv shell
    ```

2. Install the required Python packages:

    ```sh
    pipenv install
    ```

3. Set up the SQLite database:

    ```sh
    sqlite3 app/data.db < app/sql/create.sql
    ```

4. Run the Flask server:
    ```sh
    python3 run.py
    ```

## Usage

1. Open your browser and go to `http://localhost:5173` to access the frontend.
2. Use `http://localhost:5000` for the backend API.
