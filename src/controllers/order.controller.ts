import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import Order from "../models/order.model";
import MenuItem from "../models/menuItem.model";

import AppError from "../utils/AppError";

const calculateTotal = async (
    items: { menuItem: mongoose.Types.ObjectId | string; quantity: number }[]
): Promise<number> => {

    let total = 0;

    for (const item of items) {

        const menuItem = await MenuItem.findById(item.menuItem);

        if (!menuItem) {

            throw new AppError("Menu item not found", 404);

        }

        total += menuItem.price * item.quantity;

    }

    return Number(total.toFixed(2));

};



export const createOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const total_amount = await calculateTotal(req.body.items);

        const order = await Order.create({

            ...req.body,

            total_amount

        });

        res.status(201).json(order);

    } catch (error) {

        next(error);

    }

};



export const getOrders = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;

        const orders = await Order.find()

            .populate("customer")

            .populate("employee")

            .populate("items.menuItem")

            .skip((page - 1) * limit)

            .limit(limit);

        res.json(orders);

    } catch (error) {

        next(error);

    }

};



export const getOrderById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const orderId = Array.isArray(req.params.id)
            ? req.params.id[0]
            : req.params.id;

        if (
            typeof orderId !== "string" ||
            !mongoose.Types.ObjectId.isValid(orderId)
        ) {

            throw new AppError("Invalid order ID", 400);

        }

        const order = await Order.findById(orderId)

            .populate("customer")

            .populate("employee")

            .populate("items.menuItem");

        if (!order) {

            throw new AppError("Order not found", 404);

        }

        res.json(order);

    } catch (error) {

        next(error);

    }

};



export const updateOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const orderId = Array.isArray(req.params.id)
            ? req.params.id[0]
            : req.params.id;

        if (
            typeof orderId !== "string" ||
            !mongoose.Types.ObjectId.isValid(orderId)
        ) {

            throw new AppError("Invalid order ID", 400);

        }

        const updateData = { ...req.body };

        if (updateData.items) {

            updateData.total_amount = await calculateTotal(updateData.items);

        }

        const order = await Order.findByIdAndUpdate(

            orderId,

            updateData,

            {
                new: true,
                runValidators: true
            }

        );

        if (!order) {

            throw new AppError("Order not found", 404);

        }

        res.json(order);

    } catch (error) {

        next(error);

    }

};



export const deleteOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const orderId = Array.isArray(req.params.id)
            ? req.params.id[0]
            : req.params.id;

        if (
            typeof orderId !== "string" ||
            !mongoose.Types.ObjectId.isValid(orderId)
        ) {

            throw new AppError("Invalid order ID", 400);

        }

        const order = await Order.findByIdAndDelete(orderId);

        if (!order) {

            throw new AppError("Order not found", 404);

        }

        res.status(204).send();

    } catch (error) {

        next(error);

    }

};