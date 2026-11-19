# Arnob's Personal Portfolio — Full Stack Developer Website

A modern, full-stack personal portfolio and developer showcase for **Tawhid Khan Arnob**, an aspiring Full Stack Web Developer and 7th-semester Software Engineering student at Daffodil International University.

This project integrates a responsive, high-performance Next.js frontend with an Express.js REST API backend connected to MongoDB Atlas, featuring an intelligent Gemini AI portfolio assistant and automated contact notifications powered by Resend.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture & Structure](#project-architecture--structure)
- [Getting Started Locally](#getting-started-locally)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [1. Health Check (`GET /api/health`)](#1-health-check-get-apihealth)
  - [2. Submit Contact Form (`POST /api/contact`)](#2-submit-contact-form-post-apicontact)
  - [3. Gemini AI Chatbot (`POST /api/chatbot`)](#3-gemini-ai-chatbot-post-apichatbot)
- [Production Deployment Architecture](#production-deployment-architecture)
  - [Backend Deployment (Render)](#backend-deployment-render)
  - [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
  - [Database (MongoDB Atlas)](#database-mongodb-atlas)
- [Author & Connect](#author--connect)
- [License](#license)

---

## Overview

This repository houses the complete full-stack codebase for Tawhid Khan Arnob's developer portfolio. Built with a decoupled architectural pattern, the system cleanly separates the presentation layer (`/frontend`) from the business and data layer (`/backend`), enabling independent scaling, testing, and continuous deployment.

---

## Key Features

- **Responsive Developer Showcase**: Optimized for mobile devices, tablets, laptops, and ultra-wide desktops using Tailwind CSS v4 and modern CSS grid/flexbox.
- **Hero & Profile Showcase**: Visual profile presentation with centered portrait framing, atmospheric violet and cyan ambient glow, and verified academic credentials.
- **Academic Background & Skills Matrix**: Highlighting enrollment in Software Engineering (7th semester at Daffodil International University) alongside categorized technical skills across Frontend, Backend, and Database domains.
- **Curated Projects Showcase**: Real project highlights with live demo previews, repository links, and technology badges:
  - *SunCart – Summer Essentials Store* (Full-Stack E-Commerce)
  - *Dragon News* (Interactive News Portal)
  - *Books Vibe* (Book Discovery & Reading List Tracker)
  - *Digitools Platform* (Developer Productivity Utilities)
- **Certifications & Achievements**: Dedicated section showcasing verified credentials, including SQL Certification (Intellipaat Academy), DIU Mathematics Olympiad, and Career Planning Seminar awards with PDF view and download capabilities.
- **One-Click CV Download**: Direct access to Arnob's verified curriculum vitae in PDF format with polite status feedback.
- **Full-Stack Contact Form**: Form validation on both client and server sides with resilient error handling.
- **MongoDB Atlas Persistence**: Contact form inquiries are securely stored in a cloud MongoDB database with full timestamp and status tracking.
- **Automated Resend Email Notifications**: Instant transactional email dispatch to the site owner upon form submission with visitor reply-to routing and anti-XSS HTML sanitization.
- **Interactive Gemini AI Portfolio Assistant**: A slide-over AI chatbot powered by Google Gemini (`@google/genai`) strictly grounded in verified portfolio data to answer visitor inquiries regarding skills, background, education, and projects without hallucination.
- **Security & Reliability**: Configured with Helmet HTTP security headers, CORS origin whitelisting, and multi-tier IP rate limiting.

---

## Technology Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: JavaScript (ES Modules)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Fonts & Assets**: Optimized Next.js font and image pipelines

### Backend
- **Runtime**: Node.js (v20+ / v24)
- **Server Framework**: Express.js (v5)
- **Database Driver**: MongoDB Native Driver (`mongodb`) — *No Mongoose ORM*
- **Artificial Intelligence**: Google Gemini API via official `@google/genai` SDK
- **Email Delivery**: Resend Node.js SDK (`resend`)
- **Security & Utility**: Helmet, CORS, Express-Rate-Limit, Dotenv

---

## Project Architecture & Structure

```text
arnob-portfolio/
├── frontend/                     # Next.js 16 App Router Frontend
│   ├── public/
│   │   ├── certificates/         # Certificate PDFs and rendered previews
│   │   ├── images/
│   │   │   ├── profile/          # Profile portrait photos
│   │   │   └── projects/         # Captured project preview screenshots
│   │   └── resume/               # Downloadable CV PDF (Arnob-CV.pdf)
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css       # Tailwind CSS v4 root stylesheet
│   │   │   ├── layout.js         # Root layout with metadata and fonts
│   │   │   └── page.js           # Portfolio single-page composition
│   │   ├── components/
│   │   │   ├── chatbot/          # Interactive Gemini Chatbot Modal
│   │   │   ├── layout/           # Navbar, Footer
│   │   │   ├── projects/         # ProjectCard component
│   │   │   ├── sections/         # Hero, About, Skills, Education, Experience, Projects, Certifications, Contact
│   │   │   └── ui/               # Button, Badge, Card, ProfileImage, DownloadCVButton
│   │   ├── data/                 # Verified data files (personal, projects, skills, education, certifications)
│   │   ├── hooks/                # Active section & scroll listener hooks
│   │   └── lib/                  # Utility helpers (cn, smooth scrolling)
│   ├── .env.example              # Frontend environment configuration template
│   ├── next.config.mjs           # Next.js configuration
│   └── package.json
│
├── backend/                      # Express.js REST API Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js             # MongoDB native connection pooling & ping health checks
│   │   │   └── env.js            # Environment variable validation & centralized config
│   │   ├── controllers/
│   │   │   ├── chatbot.controller.js # POST /api/chatbot handler
│   │   │   ├── contact.controller.js # POST /api/contact handler
│   │   │   └── health.controller.js  # GET /api/health handler
│   │   ├── data/
│   │   │   └── portfolio.context.js  # Verified portfolio knowledge base & AI system instruction
│   │   ├── middleware/
│   │   │   └── error.middleware.js   # 404 handler and centralized JSON error handler
│   │   ├── models/
│   │   │   └── message.model.js      # MongoDB operations for the "messages" collection
│   │   ├── routes/
│   │   │   ├── chatbot.routes.js     # Chatbot API route with rate limiting
│   │   │   ├── contact.routes.js     # Contact API route with rate limiting
│   │   │   └── health.routes.js      # Health check API route
│   │   ├── services/
│   │   │   ├── email.service.js      # Resend notification email dispatcher with HTML templates
│   │   │   └── gemini.service.js     # @google/genai API caller with safety filters
│   │   ├── app.js                    # Express application configuration & middleware stack
│   │   └── server.js                 # HTTP server lifecycle & graceful shutdown
│   ├── .env.example              # Backend environment configuration template
│   └── package.json
│
├── .gitignore                    # Global Git exclusions (strictly excludes .env files)
└── README.md                     # Root project documentation
```

---

## Getting Started Locally

### Prerequisites
- **Node.js**: v18.18+ or v20+ recommended (Compatible with Node.js 24)
- **npm**: v9+
- **MongoDB Atlas** database cluster (or local MongoDB instance)
- **Gemini API Key**: From Google AI Studio
- **Resend API Key**: From Resend.com

---

### Backend Setup

1. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your local `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   *(On Windows PowerShell, use: `Copy-Item .env.example .env`)*

4. Configure your `.env` values (see [Environment Variables](#environment-variables)).

5. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend will start on `http://localhost:5000`. You can test health at `http://localhost:5000/api/health`.

---

### Frontend Setup

1. In a new terminal window, navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your local `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   *(On Windows PowerShell, use: `Copy-Item .env.example .env.local`)*

4. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## Environment Variables

### Frontend (`frontend/.env.local`)

| Variable | Description | Example Local Value |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the Express backend API | `http://localhost:5000/api` |

> **Note**: For production on Vercel, set `NEXT_PUBLIC_API_URL` to your live backend domain (e.g., `https://your-backend.onrender.com/api`).

---

### Backend (`backend/.env`)

| Variable | Description | Example / Placeholder |
|---|---|---|
| `PORT` | Local port for Express HTTP server | `5000` |
| `NODE_ENV` | Environment identifier | `development` (or `production`) |
| `MONGODB_URI` | MongoDB Atlas SRV connection string | `your_mongodb_connection_string` |
| `DB_NAME` | MongoDB database name | `arnob_portfolio` |
| `FRONTEND_URL` | Allowed origin for CORS whitelist | `http://localhost:3000` |
| `RESEND_API_KEY` | API Key from Resend for transactional email | `your_resend_api_key` |
| `EMAIL_FROM` | Verified sender address or sandbox address | `onboarding@resend.dev` |
| `RECEIVER_EMAIL` | Destination email where notifications arrive | `your_email@example.com` |
| `GEMINI_API_KEY` | API Key from Google AI Studio | `your_gemini_api_key` |
| `GEMINI_MODEL` | Gemini AI model identifier | `gemini-3.5-flash-lite` |

> ⚠️ **Security Warning**: Never commit actual `.env` or `.env.local` files to Git. Both files are strictly ignored by `.gitignore`.

---

## API Documentation

### 1. Health Check (`GET /api/health`)

Checks server uptime and pings the MongoDB Atlas cluster.

- **URL**: `/api/health`
- **Method**: `GET`
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Express server and MongoDB Atlas are operational.",
    "server": {
      "status": "up",
      "uptimeSeconds": 120,
      "environment": "development"
    },
    "database": {
      "status": "connected",
      "name": "arnob_portfolio"
    },
    "timestamp": "2026-11-13T17:00:00.000Z"
  }
  ```

---

### 2. Submit Contact Form (`POST /api/contact`)

Validates visitor input, records the document in MongoDB Atlas, and dispatches a notification email via Resend. Protected by rate limiting (5 submissions per 15 minutes per IP).

- **URL**: `/api/contact`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Project Inquiry",
    "message": "Hi Arnob, I saw your portfolio and would like to discuss an opportunity."
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Thank you! Your message has been sent successfully."
  }
  ```
- **Validation Error Response (400 Bad Request)**:
  ```json
  {
    "success": false,
    "message": "Please provide a valid email address."
  }
  ```

---

### 3. Gemini AI Chatbot (`POST /api/chatbot`)

Answers visitor questions about Arnob's skills, education, projects, and contact info using the `@google/genai` SDK with strict grounding. Protected by rate limiting (25 requests per 10 minutes per IP).

- **URL**: `/api/chatbot`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "message": "What projects has Arnob built?",
    "history": [
      { "role": "user", "content": "Who is Arnob?" },
      { "role": "model", "content": "Tawhid Khan Arnob is an Aspiring Full Stack Web Developer..." }
    ]
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "reply": "Arnob has built several projects including SunCart (Summer Essentials Store), Dragon News, Books Vibe, and Digitools Platform..."
  }
  ```

---

## Production Deployment Architecture

```text
[ Client Browser ]
        │
        ▼ (HTTPS)
[ Vercel CDN ]  ──────────>  Frontend (Next.js 16 Static / SSR)
                                  │
                                  ▼ (REST API / CORS)
[ Render Cloud ]  ─────────>  Backend (Express.js on Node.js)
                                  │
                 ┌────────────────┴────────────────┐
                 ▼                                 ▼
      [ MongoDB Atlas ]                     [ Resend / Gemini APIs ]
      (Persistent DB)                       (Email / AI Assistant)
```

### Backend Deployment (Render)
- **Service Type**: Web Service
- **Root Directory**: `backend`
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Health Check Path**: `/api/health`
- **Environment Variables to add in Render**:
  - `PORT`: (Render assigns this automatically)
  - `NODE_ENV`: `production`
  - `MONGODB_URI`: *Your MongoDB connection string*
  - `DB_NAME`: `arnob_portfolio`
  - `FRONTEND_URL`: *Your Vercel domain (e.g. `https://arnob-portfolio.vercel.app`)*
  - `RESEND_API_KEY`: *Your Resend API key*
  - `EMAIL_FROM`: `onboarding@resend.dev` (or your verified domain)
  - `RECEIVER_EMAIL`: `tawhidkhanarnob@gmail.com`
  - `GEMINI_API_KEY`: *Your Google AI Studio Gemini API key*
  - `GEMINI_MODEL`: `gemini-3.5-flash-lite`

### Frontend Deployment (Vercel)
- **Framework Preset**: Next.js
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Environment Variable to add in Vercel**:
  - `NEXT_PUBLIC_API_URL`: `https://YOUR-RENDER-BACKEND-NAME.onrender.com/api`

### Database (MongoDB Atlas)
- **Network Access**: Add `0.0.0.0/0` (Allow Access from Anywhere) in Atlas Network Access so that cloud instances on Render can connect.
- **Database Name**: `arnob_portfolio`
- **Collections**: `messages`

---

## Author & Connect

**Tawhid Khan Arnob**<br />
*Aspiring Full Stack Web Developer*<br />
*BSc in Software Engineering, Daffodil International University (7th Semester)*<br />
*Dhaka, Bangladesh*

- **GitHub Profile**: [github.com/Arnob-450](https://github.com/Arnob-450)
- **LinkedIn Profile**: [linkedin.com/in/tawhid-khan-arnob-06a595263](https://www.linkedin.com/in/tawhid-khan-arnob-06a595263/)
- **Email**: [tawhidkhanarnob@gmail.com](mailto:tawhidkhanarnob@gmail.com)

---

## License

No license has been specified for this personal project. All rights reserved by the author.
