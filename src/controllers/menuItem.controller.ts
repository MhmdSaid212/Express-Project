import { Request, Response, NextFunction } from "express";
import MenuItem from "../models/menuItem.model";
import AppError from "../utils/AppError";
import mongoose from "mongoose";

export const createMenuItem = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const menuItem = await MenuItem.create(req.body);

        res.status(201).json(menuItem);

    } catch (error) {

        next(error);

    }

};



export const getMenuItems = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;


        const menuItems = await MenuItem.find()

            .populate("category")

            .skip((page - 1) * limit)

            .limit(limit);


        res.json(menuItems);


    } catch (error) {

        next(error);

    }

};



export const getMenuItemById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        if (typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {

            throw new AppError(
                "Invalid menu item ID",
                400
            );

        }
        const menuItem = await MenuItem.findById(req.params.id)

            .populate("category");


        if (!menuItem) {

    throw new AppError(
        "Menu item not found",
        404
    );

}


        res.json(menuItem);


    } catch (error) {

        next(error);

    }

};



export const updateMenuItem = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const menuItem = await MenuItem.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );


        res.json(menuItem);


    } catch (error) {

        next(error);

    }

};



export const deleteMenuItem = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        await MenuItem.findByIdAndDelete(req.params.id);

        res.status(204).send();


    } catch (error) {

        next(error);

    }

};