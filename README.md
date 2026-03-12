# 🛒 React Shop App

A modern **React-based e-commerce application** where products are fetched from a **third-party API**. Users can browse products, view details, and add items to their shopping cart.

This project demonstrates two approaches to **global state management in React**:

* **Context API** (initial implementation)
* **Redux** (scalable state management)

The goal of this project is to understand how state management evolves in real-world React applications.

---

# 🚀 Features

* 📦 Fetch products from a **third-party API**
* 🛍️ Display product list with details
* ➕ Add products to cart
* ➖ Remove products from cart
* 🔄 Update cart quantity
* 🧾 View cart summary
* ⚡ Global state management using **Context API**
* 🔄 Scalable state management using **Redux**

---

# 🛠️ Tech Stack

## Frontend

* React
* JavaScript (ES6+)
* HTML5
* CSS3

## State Management

* Context API
* Redux

## Tools

* Git
* GitHub
* npm

---

# 📂 Project Structure

```
react-shop-app
│
├── public
│
├── src
│   ├── components
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │
│   ├── context
│   │   └── CartContext.jsx
│   │
│   ├── redux
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── CartPage.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/react-shop-app.git
```

### 2️⃣ Go to the project directory

```
cd react-shop-app
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start the development server

```
npm run dev
```

---

# 🔄 State Management

## Context API

Initially, the cart state was managed using **React Context API**.
It helps share state across components without passing props manually through every level.

Implemented features using Context API:

* Add product to cart
* Remove product from cart
* Manage cart state globally

---

## Redux

Later the project was refactored using **Redux** for better scalability and structure.

Benefits of using Redux:

* Centralized store for global state
* Predictable state updates
* Easier debugging
* Better scalability for large applications

---

# 🌐 API Integration

Products are fetched from a **third-party API** using JavaScript fetch.

Example:

```javascript
fetch("API_URL")
  .then(res => res.json())
  .then(data => setProducts(data))
```

---

# 📸 Future Improvements

* 🔐 User authentication
* 🔍 Product search and filtering
* 💳 Payment gateway integration
* 🧾 Checkout system
* 💾 Persistent cart using Local Storage

---

# 📜 License

This project is open-source and available under the **MIT License**.

---

# 👨‍💻 Author

**Rakesh Sarkar**

If you like this project, consider giving it a ⭐ on GitHub.
