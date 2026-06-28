import { Router } from "express";
import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
} from "../controllers/order.controller";
import { validate } from "../middlewares/validate.middleware";
import {
    createOrderSchema,
    updateOrderSchema
} from "../validators/order.validator";

const router = Router();

router.post("/", validate(createOrderSchema), createOrder);
router.get("/", getOrders);
router.get("/:id", getOrderById);
router.put("/:id", validate(updateOrderSchema), updateOrder);
router.delete("/:id", deleteOrder);

export default router;