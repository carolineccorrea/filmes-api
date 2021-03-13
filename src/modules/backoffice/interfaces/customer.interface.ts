import { Document } from 'mongoose';
import { User } from '../models/user.model';
import { MovieNormalized } from '../MovieNormalized.model';
export interface ICustomer extends Document {
        name: string;
        document: string;
        email: string;
        movie: MovieNormalized,
        user: User;

}