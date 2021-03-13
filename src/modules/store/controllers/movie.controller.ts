import { Controller, HttpException, HttpStatus, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Result } from 'src/modules/backoffice/models/result.model';
import { Movie } from '../entities/movie.entity';
import { MovieService } from '../services/movie.service';

@Controller('v1/movies')
export class MovieController {
    constructor(private readonly service: MovieService) { }

    @Get()
    async get() {
        try {
            const movies = await this.service.get();
            return new Result(null, true, movies, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível listar os produtos', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async post(@Body() model: Movie) {
        try {
            await this.service.post(model);
            return new Result(null, true, model, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível incluir o produto', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    async put(@Param('id') id, @Body() model: Movie) {
        try {
            await this.service.put(id, model);
            return new Result(null, true, model, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível alterar o produto', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        try {
            await this.service.delete(id);
            return new Result("Produto removido com sucesso!", true, null, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível remover o produto', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }
}