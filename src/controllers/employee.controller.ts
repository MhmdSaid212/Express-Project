import { Request, Response, NextFunction } from "express";
import Employee from "../models/employee.model";
import AppError from "../utils/AppError";
import mongoose from "mongoose";

export const createEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const employee = await Employee.create(req.body);

        res.status(201).json(employee);

    } catch (error) {

        next(error);

    }

};



export const getEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;


        const employees = await Employee.find()

            .skip((page - 1) * limit)

            .limit(limit);


        res.json(employees);


    } catch (error) {

        next(error);

    }

};



export const getEmployeeById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
 const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        if (typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {

            throw new AppError(
                "Invalid employee ID",
                400
            );

        }
        const employee = await Employee.findById(req.params.id);


        if (!employee) {

    throw new AppError(
        "Employee not found",
        404
    );

}


        res.json(employee);


    } catch (error) {

        next(error);

    }

};



export const updateEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const employee = await Employee.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );


        res.json(employee);


    } catch (error) {

        next(error);

    }

};



export const deleteEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        await Employee.findByIdAndDelete(req.params.id);

        res.status(204).send();


    } catch (error) {

        next(error);

    }

};