import { Injectable } from "@nestjs/common";
import { Validator } from "src/utils/validator";
import { MovieNormalized } from "../MovieNormalized.model";
import { Contract } from "./Contract";

@Injectable()
export class CreateMovieContract implements Contract {
    errors: any[];

    validate(model: MovieNormalized): boolean {
        const validator = new Validator();

 

        this.errors = validator.errors;
        return validator.isValid();
    }
}