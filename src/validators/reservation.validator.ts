import { z } from "zod";


export const createReservationSchema = z.object({

    customer: z.string().min(1, "Customer ID is required"),

    reservation_date: z.string().min(1, "Reservation date is required"),

    guests: z.number().positive("Guests must be positive")

});

export const updateReservationSchema = createReservationSchema.partial();