# AI Website Builder

An AI-powered website builder that generates modern website layouts and content using AI. Users can sign in with Google, generate website ideas, and preview responsive UI designs.

---
## Live Demo
https://website-builder-frontend-in41.onrender.com/

## Features

* Google Authentication with Firebase
* AI-generated website content
* Responsive modern UI
* Backend API with Node.js & Express
* MongoDB Atlas integration
* React + Vite frontend
* Redux state management
* Deployed on Render

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Redux Toolkit
* Firebase Authentication
* Axios
* Framer Motion

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT / Cookies

---

# Folder Structure

```bash
AI WEBSITE BUILDER
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── utils
│   └── server.js
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/prdeepkum1/Website-Builder.git
cd Website-Builder
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend:

```env
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run backend:



```bash
node server.js
```

---

# Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file inside frontend:

```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_key

```

Run frontend:

```bash
npm run dev
```

---

# Deployment

## Backend (Render)

| Field          | Value          |
| -------------- | -------------- |
| Root Directory | backend        |
| Build Command  | npm install    |
| Start Command  | node server.js |

---

## Frontend (Render Static Site)

| Field             | Value                        |
| ----------------- | ---------------------------- |
| Root Directory    | frontend                     |
| Build Command     | npm install && npm run build |
| Publish Directory | dist                         |

---



# Common Errors & Fixes

## MongoDB Authentication Failed

* Check username/password
* Allow IP in MongoDB Atlas
* Encode special characters in password

## Firebase Unauthorized Domain

* Add deployed frontend domain in Firebase:
  Authentication → Settings → Authorized Domains

## Render 404 Errors

* Verify backend URL in frontend `.env`
* Remove extra `/` from URL

---

# Future Improvements

* Drag & drop builder
* AI theme customization
* Export generated websites
* Live preview editor
* Multiple templates

---

