import { MovieNormalized } from "../MovieNormalized.model";
import { Document } from 'mongoose';
import { ICustomer } from "./customer.interface";

export interface IMovie extends Document {
    list: MovieNormalized
}