import { z } from "zod";


export const createEmployeeSchema = z.object({

    name: z.string().min(2, "Name too short"),

    role: z.string().min(2, "Role too short"),

    salary: z.number().positive("Salary must be positive")

});

export const updateEmployeeSchema = createEmployeeSchema.partial();