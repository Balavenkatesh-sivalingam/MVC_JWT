# 🛡️ MVC JWT Authentication API

This is a simple **User Authentication API** built using **Node.js, Express, MongoDB, and JWT** following the **MVC pattern**.  
It supports **user registration, login, and authentication with JWT**.

---

## 📂 Project Structure

.
├── config/
│ └── db.js # MongoDB connection
├── controller/
│ ├── userController.js # Register & Login logic
│ └── getUserDetails.js # Get user info logic
├── middleware/
│ └── userMiddleware.js # JWT verification
├── models/
│ └── userModel.js # User schema
├── routes/
│ ├── userRoutes.js # Auth routes
│ └── getUserRoutes.js # Protected user info routes
├── .env # Environment variables
├── server.js # Main server file
└── README.md # Documentation

📬 API Documentation

Detailed Postman Collection with sample requests & responses is available.