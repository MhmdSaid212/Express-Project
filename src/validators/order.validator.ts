import { z } from "zod";


const orderItemSchema = z.object({

    menuItem: z.string().min(1, "Menu item ID is required"),

    quantity: z.number().positive("Quantity must be positive")

});


export const createOrderSchema = z.object({

    customer: z.string().min(1, "Customer ID is required"),

    employee: z.string().min(1, "Employee ID is required"),

    items: z.array(orderItemSchema)
        .min(1, "Order must contain at least one item")

});


export const updateOrderSchema = createOrderSchema.partial();