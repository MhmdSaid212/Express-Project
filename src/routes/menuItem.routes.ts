import { Router } from "express";
import {
    createMenuItem,
    getMenuItems,
    getMenuItemById,
    updateMenuItem,
    deleteMenuItem
} from "../controllers/menuItem.controller";
import { validate } from "../middlewares/validate.middleware";
import {
    createMenuItemSchema,
    updateMenuItemSchema
} from "../validators/menuItem.validator";

const router = Router();

router.post("/", validate(createMenuItemSchema), createMenuItem);
router.get("/", getMenuItems);
router.get("/:id", getMenuItemById);
router.put("/:id", validate(updateMenuItemSchema), updateMenuItem);
router.delete("/:id", deleteMenuItem);

export default router;