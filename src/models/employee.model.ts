import { Schema, model, Document } from "mongoose";


export interface IEmployee extends Document {
    name: string;
    role: string;
    salary: number;
}


const employeeSchema = new Schema<IEmployee>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            required: true,
            trim: true
        },

        salary: {
            type: Number,
            required: true
        }
    },

    {
        timestamps: true
    }
);


export default model<IEmployee>(
    "Employee",
    employeeSchema
);