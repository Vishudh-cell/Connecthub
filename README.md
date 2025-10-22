<<<<<<< HEAD
# ConnectHub - Backend

## Setup
1. Install dependencies: `npm install`
2. Create a `.env` with:
   - MONGO_URI (optional)
   - JWT_SECRET (optional)
3. Start server: `npm run dev`

API base: /api
- POST /api/auth/register
- POST /api/auth/login
- GET /api/users/me
- POST /api/users/:id/follow
- GET /api/users/search?q=
- POST /api/posts
- GET /api/posts/feed
- POST /api/posts/:id/like
- POST /api/posts/:id/comment
=======
📱 ConnectHub – MERN Project (Minimal)
A minimal yet complete full-stack social media app built with the MERN stack. Designed as a functional baseline for the Scaler course project.

📁 Project Structure
Code
Connecthub/
├── backend/   # Express + MongoDB backend
├── frontend/  # Minimal React frontend
└── README.md
🚀 Quick Start (Local Setup)
1. Start MongoDB locally
Default URI: mongodb://127.0.0.1:27017

2. Backend Setup
bash
cd backend
npm install
# Optional: Create a .env file with:
# MONGO_URI=<your_mongo_uri>
# JWT_SECRET=<your_jwt_secret>
npm run dev
3. Frontend Setup
bash
cd frontend
npm install
npm start
📝 Notes
Cloudinary/image uploads are kept simple: frontend posts content with optional image URL.

This is a functional baseline. You can extend it with:

Cloudinary integration

Notifications

Profile editing

Pagination

Indexing and search

📚 About
“ConnectHub – Full-stack MERN social media app project for Scaler course”

📊 Tech Stack
Language	Usage
JavaScript	93.6%
CSS	4.8%
HTML	1.6%
>>>>>>> d0e7d9a3d339a9c01a1e2f6e313a1ed955421d3f
