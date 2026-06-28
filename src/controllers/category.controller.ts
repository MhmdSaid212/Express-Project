import { Request, Response, NextFunction } from "express";
import Category from "../models/category.model";
import AppError from "../utils/AppError";
import mongoose from "mongoose";

export const createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const category = await Category.create(req.body);

        res.status(201).json(category);

    } catch (error) {

        next(error);

    }

};



export const getCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;


        const categories = await Category.find()

            .skip((page - 1) * limit)

            .limit(limit);


        res.json(categories);


    } catch (error) {

        next(error);

    }

};



export const getCategoryById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        if (typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {

            throw new AppError(
                "Invalid category ID",
                400
            );

        }

        const category = await Category.findById(id);


        if (!category) {

    throw new AppError(
        "Category not found",
        404
    );

}


        res.json(category);


    } catch (error) {

        next(error);

    }

};



export const updateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const category = await Category.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );


        res.json(category);


    } catch (error) {

        next(error);

    }

};



export const deleteCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        await Category.findByIdAndDelete(req.params.id);

        res.status(204).send();


    } catch (error) {

        next(error);

    }

};