import { z } from "zod";


export const createCustomerSchema = z.object({

    name: z.string().min(2, "Name too short"),

    phone: z.string().min(8, "Phone number too short")

});

export const updateCustomerSchema = createCustomerSchema.partial();