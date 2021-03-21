import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateCustomerDTO } from '../dto/create-customer-dto';
import { ResultDto } from '../dto/result.dto';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { User } from '../models/user.model';
import { MovieNormalized } from '../MovieNormalized.model';
import { AccountService } from '../services/account.service';
import { CustomerService } from '../services/customer.service';

@Controller('v1/customers')
export class CustomerController {

    constructor(private readonly accountService: AccountService,
        private readonly customerService: CustomerService) {
    }

    @Get()
    async getAll() {
        const customers = await this.customerService.findAll();
        return new ResultDto(null, true, customers, null);
    }

    @Get(':document')
    async get(@Param('document') document) {
        const customer = await this.customerService.find(document);
        return new ResultDto(null, true, customer, null);
    }

    @Post()
    async post(@Body() model: CreateCustomerDTO) {
        try {
            const newUser = new User(model.document, model.password, true, ['user'])
            const user = await this.accountService.create(newUser);
            const customer = new Customer(model.name, model.document, model.email, [], user);
            const res = await this.customerService.create(customer)
            return new Result('Cliente criado com sucesso', true, res, null);
        } catch (error) {
            throw new HttpException(new Result('Nao foi possivel realizar seu cadastro', false, null, error), HttpStatus.BAD_REQUEST)
        }
    }

    @Post(":document/:nomefilme")
    async addMov(@Param('document') document, @Param('nomefilme') nomefilme, @Body() model: MovieNormalized) {
        try {
            const response = await this.customerService.search(nomefilme).toPromise()
            const dados = response.data

            const newObj = await this.customerService.toLowCase(dados)
            console.log(typeof newObj)
            //console.log(typeof movs)
            const movs = new MovieNormalized(newObj)
            console.log(movs)
            //validar o document se existe no banco primeiro
            const result = await this.customerService.addMov(document, movs)
            return new ResultDto(null, true, result, null);
        } catch (error) {
            throw new HttpException(new ResultDto('Não foi possível adicionar seu filme', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':document')
    async put(@Param('document') document, @Body() body) {
        return new Result('Cliente atualizado com sucesso', true, body, null)
    }

    @Delete(':document')
    async delete(@Param('document') document) {
        return new Result('Cliente deletado com sucesso', true, null, null);
    }
}
