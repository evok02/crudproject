# Node.js CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js. This application does not use a database, so all data is stored in memory and will be lost when the application is restarted.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from [here](https://nodejs.org/).

### Installing

1. Clone the repository: `git clone https://github.com/yourusername/your-repo-name.git`
2. Navigate into the project directory: `cd your-repo-name`
3. Install the dependencies: `npm install`

## Running the Application

Start the application by running `node index.js` in your terminal. The application will be available at `http://localhost:3000`.

## Features

This application provides a simple API with the following endpoints:

- `GET /users`: Get all users.
- `GET /users/:id`: Get user by ID.
- `POST /users/:id`: Edit existing user.
- `POST /users/new`: Create new user.
- `POST /users/:id/delete`: Delete user by ID.
