import express from "express";

import customerRoutes from "./routes/customer.routes";
import employeeRoutes from "./routes/employee.routes";
import categoryRoutes from "./routes/category.routes";
import menuItemRoutes from "./routes/menuItem.routes";
import reservationRoutes from "./routes/reservation.routes";
import orderRoutes from "./routes/order.routes";

import errorHandler from "./middlewares/error.middleware";


const app = express();


app.use(express.json());


// Routes
app.use("/api/customers", customerRoutes);

app.use("/api/employees", employeeRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/menu-items", menuItemRoutes);

app.use("/api/reservations", reservationRoutes);

app.use("/api/orders", orderRoutes);


// Global error handler
app.use(errorHandler);


export default app;