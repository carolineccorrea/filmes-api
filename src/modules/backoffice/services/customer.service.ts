import { HttpService, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICustomer } from "../interfaces/customer.interface";
import { Customer } from "../models/customer.model";
import { MovieNormalized } from "../MovieNormalized.model";

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly model: Model<ICustomer>,
        private readonly httpService: HttpService) { }

    async findAll(): Promise<ICustomer[]> {
        return await this.model.find({}, 'firstName lastName name email document').exec();
    }

    async create(data: Customer): Promise<ICustomer> {
        const customer = new this.model(data);
        return await customer.save();
    }

    search(tit: string) {
        const url = `http://www.omdbapi.com/?apikey=cc16fa59&t=${tit}`;
        return this.httpService.get(url)
    }

    async find(document): Promise<ICustomer> {
        return await this.model.findOne({ document }).exec();
    }

    // async validateDoc(document): Promise<boolean> {
    //     if(await this.model.findOne({ document })){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    async toLowCase(dados) {
        var keysUpper = Object.keys(dados)
        var newObj = {}
        for (var i in keysUpper) {
            newObj[keysUpper[i].toLowerCase()] = dados[keysUpper[i]]
        }
        return newObj;
    }
    
    async addMov(document: string, data: MovieNormalized): Promise<ICustomer> {
       const result = await this.find(document)
       if (result){
        const options = { upsert: true, new: true };
        return this.model.findOneAndUpdate({ document },
            {
                $push: {
                    movies: data
                },
            }, options);
        }
    }

}