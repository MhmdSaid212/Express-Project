import { Request, Response, NextFunction } from "express";
import Reservation from "../models/reservation.model";
import AppError from "../utils/AppError";
import mongoose from "mongoose";

export const createReservation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const reservation = await Reservation.create(req.body);

        res.status(201).json(reservation);

    } catch (error) {

        next(error);

    }

};



export const getReservations = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;


        const reservations = await Reservation.find()

            .populate("customer")

            .skip((page - 1) * limit)

            .limit(limit);


        res.json(reservations);


    } catch (error) {

        next(error);

    }

};



export const getReservationById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const reservation = await Reservation.findById(req.params.id)

            .populate("customer");


        if (!reservation) {

    throw new AppError(
        "Reservation not found",
        404
    );

}


        res.json(reservation);


    } catch (error) {

        next(error);

    }

};



export const updateReservation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const reservation = await Reservation.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );


        res.json(reservation);


    } catch (error) {

        next(error);

    }

};



export const deleteReservation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        await Reservation.findByIdAndDelete(req.params.id);

        res.status(204).send();


    } catch (error) {

        next(error);

    }

};