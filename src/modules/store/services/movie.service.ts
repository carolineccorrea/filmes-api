import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private readonly repository: Repository<Movie>,
    ) { }

    async get(): Promise<Movie[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<Movie> {
        return await this.repository.findOne({ id: id });
    }

    async post(movie: Movie) {
        await this.repository.save(movie);
    }

    async put(id: number, movie: Movie) {
        await this.repository.update(id, movie);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}