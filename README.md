# Mum-Assignment

## 📌 Project Overview
This project is a full-stack web application for managing products. It consists of a **React.js frontend** and an **Express.js backend** with a MongoDB database. The application provides user authentication, product management, and a structured API.

## 🚀 Features
- User authentication (Login & Sign-Up)
- Add, update, and view products
- Protected routes for authenticated users
- REST API for user and product management
- Responsive UI with Tailwind CSS

## 🏗️ Tech Stack
### Frontend
- React.js (Vite)
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication

## 📂 Project Structure
### Backend (`/backend`)
```
backend/
 ├── config/
 │   ├── config.env
 │   ├── database.js
 ├── controllers/
 │   ├── productController.js
 │   ├── userController.js
 ├── middlewares/
 ├── models/
 │   ├── productModel.js
 │   ├── userModel.js
 ├── routes/
 │   ├── productRoute.js
 │   ├── userRoute.js
 ├── utils/
 ├── app.js
 ├── package.json
```

### Frontend (`/frontend`)
```
frontend/
 ├── public/
 ├── src/
 │   ├── assets/
 │   ├── components/
 │   │   ├── Navbar.jsx
 │   │   ├── ProductCard.jsx
 │   ├── pages/
 │   │   ├── Home.jsx
 │   │   ├── Login.jsx
 │   │   ├── SignUp.jsx
 │   │   ├── AllProducts.jsx
 │   │   ├── NewProduct.jsx
 │   │   ├── UpdateProduct.jsx
 │   ├── App.jsx
 │   ├── index.css
 │   ├── main.jsx
 ├── package.json
 ├── vite.config.js
```

## ⚙️ Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14)
- MongoDB

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Siddharth-Tayal/Mum-Assignment.git
cd Mum-Assignment
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file inside the `backend/config` folder and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Start the backend server:
```sh
npm start
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```

## 🛠️ API Endpoints
### User Routes
- `POST /api/v1/user/register` - Register a new user
- `POST /api/v1/user/login` - Login user
- `GET /api/v1/user/info` - Get user details

### Product Routes
- `GET /api/v1/products` - Get all products
- `POST /api/v1/product/add` - Add a new product
- `PUT /api/v1/product/update/:id` - Update product
- `DELETE /api/v1/product/delete/:id` - Delete product

## 🤝 Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Create a pull request

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

## ✨ Acknowledgments
Special thanks to [Siddharth-Tayal](https://github.com/Siddharth-Tayal) for this amazing project!

and thanks to [Harsh Goyal](https://github.com/HarshGoyal2702) for the README file who understand the project and create a well defined documentation.
