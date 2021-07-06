import { ICustomer } from "../interfaces/customer.interface";
import { IMovie } from "../interfaces/movie.interface";

export class Review {
   
    constructor (
        idFilme: IMovie,
        rating: number,
        idUsuario: ICustomer,
        comentario: String
    ) {}
}
