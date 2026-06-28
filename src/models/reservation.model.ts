import { Schema, model, Document, Types } from "mongoose";


export interface IReservation extends Document {
    customer: Types.ObjectId;
    reservation_date: Date;
    guests: number;
}


const reservationSchema = new Schema<IReservation>(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },

        reservation_date: {
            type: Date,
            required: true
        },

        guests: {
            type: Number,
            required: true
        }
    },

    {
        timestamps: true
    }
);


export default model<IReservation>(
    "Reservation",
    reservationSchema
);