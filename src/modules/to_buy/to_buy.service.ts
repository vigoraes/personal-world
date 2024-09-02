import { Injectable } from '@nestjs/common';
import { CreateToBuyDto } from './dto/create-to_buy.dto';
import { UpdateToBuyDto } from './dto/update-to_buy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ToBuyEntity } from './entities/to_buy.entity';
import { PrioritiesEntity } from '../priority/entities/priorities.entity';
import { Repository } from 'typeorm';
import { TypesEntity } from '../type/entities/types.entity';

@Injectable()
export class ToBuyService {

  constructor(
    @InjectRepository(ToBuyEntity)
    private toBuyRepository: Repository<ToBuyEntity>,
    @InjectRepository(PrioritiesEntity)
    private prioritiesRepository: Repository<PrioritiesEntity>,
    @InjectRepository(TypesEntity)
    private typeRepository: Repository<TypesEntity>
  ){}

  async create(createToBuyDto: CreateToBuyDto) {

    const priority = await this.prioritiesRepository.findOneBy({id: +createToBuyDto.priority});

    const type = await this.typeRepository.findOneBy({id: +createToBuyDto.type});

    return await this.toBuyRepository.insert({...createToBuyDto, priority, type});
  }

  async findAll() {
    return await this.toBuyRepository.find();
  }

  async findOne(id: number) {
    return await this.toBuyRepository.findOneBy({ id });
  }

  async update(id: number, updateToBuyDto: UpdateToBuyDto) {
    
    const priority = await this.prioritiesRepository.findOneBy({id: +updateToBuyDto.priority});

    const type = await this.typeRepository.findOneBy({id: +updateToBuyDto.type});

    return this.toBuyRepository.update(id, {...updateToBuyDto, priority, type});
  }

  async remove(id: number) {
    return await this.toBuyRepository.delete(id);
  }
}
