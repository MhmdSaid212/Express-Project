import { Schema, model, Document, Types } from "mongoose";


export interface IMenuItem extends Document {
    item_name: string;
    price: number;
    category: Types.ObjectId;
}


const menuItemSchema = new Schema<IMenuItem>(
    {
        item_name: {
            type: String,
            required: true,
            trim: true
        },

        price: {
            type: Number,
            required: true
        },

        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        }
    },

    {
        timestamps: true
    }
);


export default model<IMenuItem>(
    "MenuItem",
    menuItemSchema
);