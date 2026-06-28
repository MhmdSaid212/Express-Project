import { Router } from "express";
import {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} from "../controllers/employee.controller";
import { validate } from "../middlewares/validate.middleware";
import {
    createEmployeeSchema,
    updateEmployeeSchema
} from "../validators/employee.validator";

const router = Router();

router.post("/", validate(createEmployeeSchema), createEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", validate(updateEmployeeSchema), updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;