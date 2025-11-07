AI Chatbot (MERN Full-Stack Application)

An intelligent AI-powered chatbot built using the MERN stack and Google Gemini API.
The system provides a modern chat interface with authentication, context persistence, streaming responses, and elegant UI theming.

🚀 Features
🧠 AI & Chat Features

Gemini 2.5 Flash API integration – Fast, intelligent, and context-aware replies.

Context retention – Stores chat history per user in MongoDB.

Persistent sessions – Messages remain even after reloads or logout.

Streaming simulation – Smooth text animation mimicking real typing.

Markdown & code rendering – Supports formatted AI responses and syntax blocks.

Clear & Export chat options – Delete or download conversation history.

Shift + Enter for new lines – Multi-line message input.

🎨 UI / UX

Glassmorphic dark/light theme with toggle.

Typing indicators & smooth message animations using Framer Motion.

Responsive design – Works seamlessly on desktop and mobile.

Beautiful welcome section with suggestion chips for quick prompts.

Dynamic avatars for bot and user.

Header actions: Theme toggle | Clear Chat | Export Chat | User Profile | Logout.

🔐 Authentication & Security

JWT-based authentication with secure middleware.

Protected API routes for chat endpoints.

Encrypted environment secrets (.env).

Session persistence via localStorage tokens.

Logout & auto-redirect logic for seamless session handling.

🗄️ Persistence Layer

MongoDB Atlas / Local MongoDB integration.

Collections:

users – user credentials & info

messages – chat content with timestamps

Built-in TTL support for inactive sessions (optional).

⚙️ Developer Experience

Modular folder structure with clean separation of concerns.

Environment-driven configuration for easy deployment.

Docker-ready backend structure.

ES6+ clean code with comments and scalability in mind.

🧩 Tech Stack
Layer	Technology
Frontend	React 18, Axios, React-Router-DOM, Framer-Motion, React-Markdown
Backend	Node.js (Express.js)
Database	MongoDB / Mongoose
AI Provider	Google Gemini 2.0 Flash API
Auth	JWT (JSON Web Token)
Styling	CSS 3 + Tailwind/Custom styling
Deployment	Render / Vercel / Netlify / Docker
📁 Project Structure
root/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatUI.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── textstyle.js
│   │   │   └── *.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
│
├── server/                 # Node + Express Backend
│   ├── controllers/
│   │   ├── chatController.js
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── chatRoutes.js
│   ├── services/
│   │   └── providerService.js
│   ├── providers/
│   │   ├── geminiProvider.js
│   │   └── providerFactory.js
│   ├── server.js
│   └── .env
│
├── README.md
└── package.json

🔑 Environment Variables

Create a .env file inside your server directory:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/aichatbot
JWT_SECRET=mysecretkey
GEMINI_API_KEY=your_google_gemini_api_key
DEFAULT_PROVIDER=gemini

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/<your-username>/AI-Chatbot.git
cd AI-Chatbot

2️⃣ Install Backend Dependencies
cd server
npm install

3️⃣ Install Frontend Dependencies
cd ../client
npm install

4️⃣ Run Development Servers

Start backend:

cd server
npm start


Start frontend:

cd ../client
npm start


Frontend runs on http://localhost:3000

Backend runs on http://localhost:5000

🧠 How It Works

User Registration/Login:
JWT token is generated and stored in localStorage for session authentication.

Chat Flow:

The user sends a message → frontend calls /api/chat/message.

Backend validates JWT → calls Gemini API.

Gemini’s response is returned and stored in MongoDB.

History & Controls:

/api/chat/history loads past chats.

/api/chat/clear deletes messages.

/api/chat/export downloads them as JSON.

Frontend UI:

Uses React with Axios for requests.

Framer-Motion for animations.

Markdown rendering for AI responses.

🧪 Example API Endpoints
Endpoint	Method	Auth	Description
/api/auth/register	POST	❌	Register new user
/api/auth/login	POST	❌	Authenticate and receive token
/api/chat/message	POST	✅	Send prompt to Gemini
/api/chat/history	GET	✅	Load all chat messages
/api/chat/clear	DELETE	✅	Clear chat history
/api/chat/export	GET	✅	Export chat as JSON
🧰 Future Enhancements

🗂️ Multi-session chat sidebar

🎤 Voice input (Speech-to-Text)

🗣️ Text-to-Speech responses

🧠 Conversation summarization

🌈 Advanced theme customization

🧾 Analytics dashboard for usage tracking

🐳 Full Docker support for deployment

📸 Screenshots
💬 Chat Interface

🔐 Login Page

👨‍💻 Author

Developer: Your Name
GitHub: github.com/your-username

Email: youremail@example.com

🪪 License

This project is licensed under the MIT License — feel free to use and modify with attribution.

⭐ Acknowledgments

Google Gemini Team for the Generative Language API.

React & Node.js communities for powerful open-source tools.

Inspired by modern conversational UIs like ChatGPT and Bard.

✅ A complete MERN + Gemini chatbot, production-ready and academically solid.
If you found this useful — don’t forget to ⭐ star the repo on GitHub!