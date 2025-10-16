# Small Blogging API

A simple RESTful API for a blogging platform built with Node.js, Express, and MongoDB.

## Features

- User registration and login (JWT authentication)
- Post creation and management
- Error handling middleware
- MongoDB integration with Mongoose

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ozodbekk1/small-blogging-api.git
   cd small-blogging-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add:
   ```
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=1d
   PORT=8080
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   node index.js
   ```

## API Endpoints

### Auth

- `POST /api/v1/auth/register` — Register a new user
- `POST /api/v1/auth/login` — Login and get JWT token
-  `POST /api/v1/auth/logout` — Logout


### Posts

- `GET /api/v1/post` — Get all posts
- `POST /api/v1/post` — Create a new post

## Project Structure

```
controllers/
middleware/
models/
routes/
index.js
```

## License

MIT
