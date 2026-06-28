import { Schema, model, Document, Types } from "mongoose";


interface IOrderItem {
    menuItem: Types.ObjectId;
    quantity: number;
}


export interface IOrder extends Document {

    customer: Types.ObjectId;

    employee: Types.ObjectId;

    items: IOrderItem[];

    total_amount: number;

}


const orderSchema = new Schema<IOrder>(

    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },


        employee: {
            type: Schema.Types.ObjectId,
            ref: "Employee",
            required: true
        },


        items: [
            {
                menuItem: {
                    type: Schema.Types.ObjectId,
                    ref: "MenuItem",
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],


        total_amount: {
            type: Number,
            required: true
        }

    },

    {
        timestamps: true
    }

);


export default model<IOrder>(
    "Order",
    orderSchema
);