# 🤖 AI Chatbot (MERN + Gemini 2.5 Flash)

An intelligent, real-time chatbot built with the **MERN stack (MongoDB, Express, React, Node.js)** and powered by **Google Gemini 2.5 Flash**.  
It features secure JWT authentication, streaming AI responses, and a polished modern UI.

---

## 🚀 Features

### 💬 Chat System
- Interactive **real-time conversation** with Gemini AI.  
- **Typing animation** and smooth message transitions using *Framer Motion*.  
- **Shift + Enter** support for multiline messages.  
- **Light / Dark theme toggle** with persistence.  

### 🧑‍💻 User Management
- Secure **JWT-based authentication**.  
- **Register / Login / Logout** workflows.  
- Session persistence (auto-login on reload).  

### 🧱 Chat Persistence
- **MongoDB storage** for all user messages.  
- **Load previous conversations** after login.  
- Options to **Clear Chat** and **Export Chat** as JSON.  

### ⚙️ Backend (Node + Express)
- Modular architecture with `controllers`, `routes`, `services`, and `middleware`.  
- Provider abstraction layer — currently integrated with **Gemini 2.0 Flash**.  
- Secure REST API endpoints with authentication middleware.  

### 🎨 Frontend (React)
- Responsive UI built with React and Framer Motion.  
- Markdown rendering and code-block formatting in AI responses.  
- Custom avatars, smooth transitions, and consistent theme design.  

---

## 🧩 Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React 18, Axios, Framer Motion, React Markdown |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB + Mongoose |
| **AI Provider** | Google Gemini 2.5 Flash (Generative Language API) |
| **Authentication** | JWT (JSON Web Tokens) |
| **Styling** | CSS Modules + Custom Themes |

---
## 🗂️ Project Structure
```
AI-Chatbot/
│
├── client/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ChatUI.jsx / ChatUI.css
│ │ │ ├── Login.jsx / Login.css
│ │ │ ├── Register.jsx / Register.css
│ │ │ ├── textstyle.js
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── server/
├── controllers/
│ ├── chatController.js
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── userModel.js
│ └── Message.js
├── providers/
│ ├── geminiProvider.js
│ └── providerFactory.js
├── routes/
│ ├── chatRoutes.js
│ └── authRoutes.js
├── services/
│ └── providerService.js
├── server.js
└── .env

```
---

### 🔑 Environment Variables

Create a `.env` file in your `/server` directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/aichatbot
JWT_SECRET=mysecretkey
GEMINI_API_KEY=your_google_gemini_api_key
DEFAULT_PROVIDER=gemini
```

## ⚙️ Installation & Setup
```
1️⃣ Clone the repository
git clone https://github.com/yourusername/AI-ChatBot.git
cd AI-ChatBot

2️⃣ Install backend dependencies
cd server
npm install

3️⃣ Install frontend dependencies
cd ../client
npm install

4️⃣ Start backend server
cd ../server
npm run dev

5️⃣ Start frontend
cd ../client
npm start
```

Frontend runs at http://localhost:3000

Backend runs at http://localhost:5000

## 🔒 Authentication Flow

User registers or logs in → JWT token generated.

Token stored securely in localStorage.

Protected routes (chat/history/clear/export) validated using middleware.

Session auto-persists until user logs out.

## 💬 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | Login and receive JWT |
| **POST** | `/api/chat/message` | Send prompt to Gemini |
| **DELETE** | `/api/chat/clear` | Clear user chat history |
| **GET** | `/api/chat/export` | Export chat as JSON |

## 🧑‍🎓 Author Information

| Detail | Value |
| :--- | :--- |
| **Name** |Saran Dasari|
| **Email** |dasarisaran2005@gmail.com |
| **GitHub** | [[GitHub Profile]](https://github.com/sarandasari11) |
