📦 Scalable Image Import System
A scalable web application that imports images from a public Google Drive folder using an asynchronous, queue-based architecture.


🚀 Features

Import images using a Google Drive folder URL

Asynchronous processing using Redis queue

Scalable backend architecture

Import history with real-time status (pending, completed)

Deployed frontend and backend



🏗️ Tech Stack
Frontend

HTML

CSS

JavaScript (Fetch API)

GitHub Pages (Hosting)

Backend (API Service)

Node.js

Express.js

PostgreSQL

Redis (Queue)

Railway (Hosting)

Optional Worker (Background Service)

Node.js

Redis

Google Drive API

AWS S3 / MinIO (for image storage)



🧠 Architecture Diagram

High-Level Architecture
[ Frontend ]
     |
     v
[ API Service ]
     |
     ├── PostgreSQL (Import Metadata)
     |
     └── Redis Queue
            |
            v
      [ Worker Service ]
            |
            v
     [ Image Storage ]



Component Explanation
1️⃣ Frontend

Takes Google Drive folder URL from user

Displays import history

Communicates only with API service

2️⃣ API Service

Validates input

Stores import details in database

Pushes jobs to Redis queue

Returns response immediately (non-blocking)

3️⃣ Redis Queue

Acts as message broker

Stores import jobs

Ensures scalability and fault tolerance

4️⃣ Worker Service

Runs independently in background

Pulls jobs from Redis

Downloads images from Google Drive

Uploads images to storage

Updates import status

5️⃣ Database (PostgreSQL)

Stores import metadata

Tracks status (pending, completed)

Provides import history



💡 Why This Architecture?

✔ Scalable
✔ Non-blocking
✔ Fault-tolerant
✔ Production-ready



🌐 Live URLs
Frontend

👉 GitHub Pages
https://shrinathm-77.github.io/scalable-image-import-frontend/

Backend API

👉 Railway
https://scalable-image-import-api-production.up.railway.app

API Endpoints

Health Check
/health

Create Import
/api/import/google-drive

Import History
/api/import/list



📌 Future Enhancements

Deploy background worker

Image preview gallery

Retry failed imports

Authentication

Progress tracking



👨‍💻 Author

Shrinath M
GitHub: https://github.com/ShrinathM-77

🎯 One-Line Summary (Very Important)

“This project demonstrates a scalable, asynchronous image import system using queues and background workers.”

