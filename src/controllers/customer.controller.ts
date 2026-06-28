import { Request, Response, NextFunction } from "express";
import Customer from "../models/customer.model";
import AppError from "../utils/AppError";
import mongoose from "mongoose";

export const createCustomer = async(
req:Request,
res:Response,
next:NextFunction
)=>{

try{

const customer = await Customer.create(req.body);

res.status(201).json(customer);


}catch(error){

next(error);

}

};




export const getCustomers = async(
req:Request,
res:Response,
next:NextFunction
)=>{

try{

const page = Number(req.query.page) || 1;

const limit = Number(req.query.limit) || 10;


const customers = await Customer.find()

.skip((page - 1) * limit)

.limit(limit);



res.json(customers);



}catch(error){

next(error);

}

};





export const getCustomerById = async(
req:Request,
res:Response,
next:NextFunction
)=>{

try{

const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

if (typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {

    throw new AppError(
        "Invalid customer ID",
        400
    );

}

const customer =
await Customer.findById(req.params.id);



if (!customer) {

    throw new AppError(
        "Customer not found",
        404
    );

}


res.json(customer);



}catch(error){

next(error);

}

};





export const updateCustomer = async(
req:Request,
res:Response,
next:NextFunction
)=>{

try{


const customer =
await Customer.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true
}

);



res.json(customer);



}catch(error){

next(error);

}

};





export const deleteCustomer = async(
req:Request,
res:Response,
next:NextFunction
)=>{

try{


await Customer.findByIdAndDelete(req.params.id);


res.status(204).send();



}catch(error){

next(error);

}

};