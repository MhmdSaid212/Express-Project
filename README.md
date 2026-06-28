# TS CRUD APIs

A RESTful API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

This project demonstrates a complete restaurant management backend with CRUD operations, database relationships, validation, pagination, and centralized error handling.

---

## Features

* CRUD operations for:
* Customers
* Employees
* Categories
* Menu Items
* Reservations
* Orders
---
* MongoDB integration using Mongoose
* TypeScript with strict typing
* Data modeling with Mongoose schemas
* Collection relationships using ObjectId references
* Request validation using Zod
* Pagination support
* Automatic order total calculation
* Environment variable management with dotenv
* Centralized error handling middleware

  
## Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB + Mongoose**
* **Nodemon** (development)

---


---

## Project Structure
Express Project/
ts-crud-apis/
├── src/
│ ├── config/ # Database connection
│ │ └── db.ts
│ │
│ ├── controllers/ # Business logic
│ │ ├── customer.controller.ts
│ │ ├── employee.controller.ts
│ │ ├── category.controller.ts
│ │ ├── menuItem.controller.ts
│ │ ├── reservation.controller.ts
│ │ └── order.controller.ts
│ │
│ ├── models/ # Mongoose schemas
│ │ ├── customer.model.ts
│ │ ├── employee.model.ts
│ │ ├── category.model.ts
│ │ ├── menuItem.model.ts
│ │ ├── reservation.model.ts
│ │ └── order.model.ts
│ │
│ ├── routes/ # API routes
│ │
│ ├── middlewares/
│ │ └── error.middleware.ts
│ │
│ ├── utils/
│ │ └── AppError.ts
│ │
│ ├── validators/ # Zod validation schemas
│ │
│ ├── app.ts
│ └── server.ts
│
├── .env
├── .env.example
├── tsconfig.json
├── package.json
└── README.md


---

## Installation & Setup

### 1. Clone the repository

```bash
git clone git@github.com:MhmdSaid212/Express-Project.git
cd ts-crud-apis
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=YOUR_MONGO_URI
```

---

## Available Scripts

```json
"scripts": {
  "dev": "nodemon --exec ts-node server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

* **npm run dev** – Start development server with hot reload
* **npm run build** – Compile TypeScript to JavaScript
* **npm start** – Run compiled production build

---

## API Endpoints

Base URL: `http://localhost:5000/api`

##Customers

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| POST   | /customers     | Create customer    |
| GET    | /customers     | Get all customers  |
| GET    | /customers/:id | Get customer by ID |
| PUT    | /customers/:id | Update customer    |
| DELETE | /customers/:id | Delete customer    |

##Employees

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| POST   | /employees     | Create employee    |
| GET    | /employees     | Get all employees  |
| GET    | /employees/:id | Get employee by ID |
| PUT    | /employees/:id | Update employee    |
| DELETE | /employees/:id | Delete employee    |


##Categories

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| POST   | /categories     | Create category |
| GET    | /categories     | Get categories  |
| GET    | /categories/:id | Get category    |
| PUT    | /categories/:id | Update category |
| DELETE | /categories/:id | Delete category |


##Menu Items

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| POST   | /menu-items     | Create menu item |
| GET    | /menu-items     | Get menu items   |
| GET    | /menu-items/:id | Get menu item    |
| PUT    | /menu-items/:id | Update menu item |
| DELETE | /menu-items/:id | Delete menu item |


##Reservations

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | /reservations     | Create reservation |
| GET    | /reservations     | Get reservations   |
| GET    | /reservations/:id | Get reservation    |
| PUT    | /reservations/:id | Update reservation |
| DELETE | /reservations/:id | Delete reservation |


##Orders

| Method | Endpoint    | Description  |
| ------ | ----------- | ------------ |
| POST   | /orders     | Create order |
| GET    | /orders     | Get orders   |
| GET    | /orders/:id | Get order    |
| PUT    | /orders/:id | Update order |
| DELETE | /orders/:id | Delete order |

---

## Error Handling

All errors are handled by a global error middleware:

* Centralized error responses
* Custom application errors
* Validation error handling
* Invalid ObjectId handling
* Prevents application crashes
---

## License

This project is open-source and free to use for learning and development purposes.
