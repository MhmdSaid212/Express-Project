import { z } from "zod";


export const createCategorySchema = z.object({

    category_name: z.string().min(2, "Category name too short")

});

export const updateCategorySchema = createCategorySchema.partial();