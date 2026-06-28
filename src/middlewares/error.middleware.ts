import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";


const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    console.error(err);

    console.log("ERROR TYPE:", err.constructor.name);
    console.log("IS APP ERROR:", err instanceof AppError);


    if (err instanceof AppError) {

        res.status(err.statusCode).json({
            message: err.message
        });

        return;

    }


    res.status(500).json({
        message: "Internal Server Error"
    });

};


export default errorHandler;