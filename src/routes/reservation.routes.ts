import { Router } from "express";
import {
    createReservation,
    getReservations,
    getReservationById,
    updateReservation,
    deleteReservation
} from "../controllers/reservation.controller";
import { validate } from "../middlewares/validate.middleware";
import {
    createReservationSchema,
    updateReservationSchema
} from "../validators/reservation.validator";

const router = Router();

router.post("/", validate(createReservationSchema), createReservation);
router.get("/", getReservations);
router.get("/:id", getReservationById);
router.put("/:id", validate(updateReservationSchema), updateReservation);
router.delete("/:id", deleteReservation);

export default router;