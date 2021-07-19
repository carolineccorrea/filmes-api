import { HttpService, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICustomer } from "../interfaces/customer.interface";
import { IMovie } from "../interfaces/movie.interface";
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

    async findCustomer(document): Promise<ICustomer> {
        return await this.model.findOne({ document }).exec();
    }


    async toLowCase(dados) {
        var keysUpper = Object.keys(dados)
        var newObj = {}
        for (var i in keysUpper) {
            newObj[keysUpper[i].toLowerCase()] = dados[keysUpper[i]]
        }
        return newObj;
    }
    // async firstUpperCase(name) {
    //     const nomefilme = name.toLowerCase().replace(/(?:^|\s)\S/g)
    //     return nomefilme.toUpperCase();

    // }

    async titleize(text) {
        var words = text.toLowerCase().split(" ");
        for (var a = 0; a < words.length; a++) {
            var w = words[a];
            words[a] = w[0].toUpperCase() + w.slice(1);
        }
        return words.join(" ");
    }

    async treatMovie(nomefilme: string) {
        const response = await this.search(nomefilme).toPromise();
        const dados = response.data;
        const newObj = await this.toLowCase(dados);
        return newObj;
    }

    async addMov(document: string, data: MovieNormalized): Promise<ICustomer> {
        const result = await this.findCustomer(document)
        if (result) {
            const options = { upsert: true, new: true };
            return this.model.findOneAndUpdate({ document },
                {
                    $push: {
                        movies: data
                    },
                }, options);
        }
    }

    async getMovie(document: string, nomefilme: string): Promise<any> {
        const nome = await this.titleize(nomefilme)
        console.log(nome)
         const result = await this.model.findOne({document: document, "movies.title": nome },{ "movies.$": 1}).exec();
        return result;
    }

}