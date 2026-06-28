import { Router } from "express";
import {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} from "../controllers/customer.controller";
import { validate } from "../middlewares/validate.middleware";
import {
    createCustomerSchema,
    updateCustomerSchema
} from "../validators/customer.validator";

const router = Router();

router.post("/", validate(createCustomerSchema), createCustomer);
router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.put("/:id", validate(updateCustomerSchema), updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;