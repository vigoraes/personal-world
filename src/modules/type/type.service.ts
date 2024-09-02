import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Repository } from 'typeorm';
import { TypesEntity } from './entities/types.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeService {

  constructor(
    @InjectRepository(TypesEntity)
    private typeRepository: Repository<TypesEntity>
  ){}
  async create(createTypeDto: CreateTypeDto) {
    return await this.typeRepository.insert(createTypeDto);
  }

  async findAll() {
    return await this.typeRepository.find();
  }

  async findOne(id: number) {
    return await this.typeRepository.findOneBy({id});
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    return await this.typeRepository.update(id, updateTypeDto);
  }

  async remove(id: number) {
    return await this.typeRepository.delete(id);
  }
}
