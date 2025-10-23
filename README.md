📱 ConnectHub – Full-stack MERN Social Media App
A minimal yet functional full-stack social media platform built with the MERN stack. Designed as a baseline project for the Scaler course, ConnectHub supports user authentication, posting, following, and feed generation.

📁 Project Structure
Code
Connecthub/
├── backend/   # Express + MongoDB backend
├── frontend/  # Minimal React frontend
└── README.md
🚀 Quick Start
1. Start MongoDB Locally
Default URI: mongodb://127.0.0.1:27017

2. Backend Setup
bash
cd backend
npm install
Create a .env file with the following (optional if using defaults):

Code
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
Start the backend server:

bash
npm run dev
3. Frontend Setup
bash
cd frontend
npm install
npm start
🔌 API Endpoints
Base URL: /api

Auth

POST /api/auth/register – Register a new user

POST /api/auth/login – Login and receive JWT

User

GET /api/users/me – Get current user profile

POST /api/users/:id/follow – Follow a user

GET /api/users/search?q= – Search users

Posts

POST /api/posts – Create a post

GET /api/posts/feed – Get feed from followed users

POST /api/posts/:id/like – Like a post

POST /api/posts/:id/comment – Comment on a post

📝 Notes
Image uploads are simplified: frontend sends an optional image URL.

Extendable features:

Cloudinary integration

Notifications

Profile editing

Pagination

Indexing & search

📚 About
This project was built as part of the Scaler Academy curriculum to demonstrate full-stack proficiency using the MERN stack.
