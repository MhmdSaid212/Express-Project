import { z } from "zod";


export const createMenuItemSchema = z.object({

    item_name: z.string().min(2, "Item name too short"),

    price: z.number().positive("Price must be positive"),

    category: z.string().min(1, "Category ID is required")

});

export const updateMenuItemSchema = createMenuItemSchema.partial();