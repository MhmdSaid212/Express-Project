import { Schema, model, Document } from "mongoose";


export interface ICustomer extends Document {
    name: string;
    phone: string;
}


const customerSchema = new Schema<ICustomer>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);


export default model<ICustomer>(
    "Customer",
    customerSchema
);