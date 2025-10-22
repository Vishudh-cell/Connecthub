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
