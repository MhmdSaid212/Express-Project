import { Schema, model, Document } from "mongoose";


export interface ICategory extends Document {
    category_name: string;
}


const categorySchema = new Schema<ICategory>(
    {
        category_name: {
            type: String,
            required: true,
            trim: true
        }
    },

    {
        timestamps: true
    }
);


export default model<ICategory>(
    "Category",
    categorySchema
);