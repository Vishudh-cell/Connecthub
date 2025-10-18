# ConnectHub - MERN Project (Minimal)
This archive contains a minimal but complete MERN project for the "ConnectHub" social media app.

## Structure
- backend/: Express + MongoDB backend
- frontend/: React frontend (minimal)

## Quick start (local)
1. Start MongoDB locally (default: mongodb://127.0.0.1:27017)
2. Backend:
   - cd backend
   - npm install
   - create .env optionally (MONGO_URI, JWT_SECRET)
   - npm run dev
3. Frontend:
   - cd frontend
   - npm install
   - npm start

## Notes
- Cloudinary/image uploads are left simple (frontend posts content and optional image URL).
- This is designed to be a functional baseline you can extend to add features like Cloudinary, notifications, profile editing, pagination, indexing, etc.
