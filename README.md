<img width="1912" height="886" alt="ConvoY" src="https://github.com/user-attachments/assets/7f1aa458-f0c7-4e09-a5c5-2039e542c739" /># 🚀 ConvoY – Real-time Chat Application

ConvoY is a real-time chat application built with the MERN stack and Socket.io. It offers a seamless messaging experience with secure JWT authentication, real-time online status, and global state management via Zustand. The app features a modern UI built with TailwindCSS and Daisy UI, along with robust backend functionality for message handling and user management.

---

## ✨ Features

- 🔒 JWT Authentication (Sign up, Login, Protected Routes)
- 💬 Real-time Messaging with Socket.io
- 👥 Online User Presence Tracking
- 🌐 Zustand for Global State Management
- 🎨 TailwindCSS + Daisy UI for Responsive Design
- ⚙️ Modular Architecture for Scalability
- ❌ Robust Error Handling

---

## 🛠️ Tech Stack

### Frontend
- React.js + Vite
- Zustand (State Management)
- Tailwind CSS & Daisy UI
- Axios

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Socket.io (Real-time messaging)
- JWT (Authentication)
- Cloudinary (Media Storage)



## 📁 Directory Structure
---
└── yashpatel2311-convoy/
├── Backend/
│ ├── package.json
│ └── src/
│ ├── index.js
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ └── message.controller.js
│ ├── lib/
│ │ ├── cloudinary.js
│ │ ├── db.js
│ │ ├── socket.js
│ │ └── utils.js
│ ├── middleware/
│ │ └── auth.middleware.js
│ ├── models/
│ │ ├── message.model.js
│ │ └── user.model.js
│ ├── routes/
│ │ ├── auth.route.js
│ │ └── message.route.js
│ └── seeds/
│ └── user.seed.js
└── Frontend/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
├── App.jsx
├── index.css
├── main.jsx
├── components/
│ ├── AuthImagePattern.jsx
│ ├── ChatContainer.jsx
│ ├── ChatHeader.jsx
│ ├── MessageInput.jsx
│ ├── Navbar.jsx
│ ├── NoChatSelected.jsx
│ ├── Sidebar.jsx
│ └── skeletons/
│ ├── MessageSkeleton.jsx
│ └── SidebarSkeleton.jsx
├── constants/
│ └── index.js
├── lib/
│ ├── axios.js
│ └── utils.js
├── pages/
│ ├── HomePage.jsx
│ ├── LoginPage.jsx
│ ├── ProfilePage.jsx
│ ├── SettingsPage.jsx
│ └── SignUpPage.jsx
└── store/
├── useAuthStore.js
├── useChatStore.js
└── useThemeStore.js








## 🧪 Getting Started

### 1. Clone the Repo

git clone https://github.com/Yashpatel2311/ConvoY.git
cd ConvoY

### 2. Backend Setup
cd Backend
npm install
Create a `.env` file and add Mongo URI, JWT secret, etc.
npm run dev

### 3. Frontend Setup
cd ../Frontend
npm install
npm run dev

### 4. Final Step
   Visit http://localhost:5173 to view the app in development mode.

