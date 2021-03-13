import { IUser } from '../interfaces/user.interface';
import { MovieNormalized } from '../MovieNormalized.model';

export class Customer {

        constructor(
                public name: string,
                public document: string,
                public email: string,
                public movie: MovieNormalized[],
                public user: IUser) {
                //super()
        }
}
