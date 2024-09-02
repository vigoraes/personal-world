import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to_do.dto';
import { UpdateToDoDto } from './dto/update-to_do.dto';
import { Repository } from 'typeorm';
import { ToDoEntity } from './entities/to_do.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PrioritiesEntity } from '../priority/entities/priorities.entity';
import { TypesEntity } from '../type/entities/types.entity';

@Injectable()
export class ToDoService {

  constructor(
    @InjectRepository(ToDoEntity)
    private toDoRepository: Repository<ToDoEntity>,
    @InjectRepository(PrioritiesEntity)
    private prioritiesRepository: Repository<PrioritiesEntity>,
    @InjectRepository(TypesEntity)
    private typeRepository: Repository<TypesEntity>
  ){}

  async create(createToDoDto: CreateToDoDto) {

    const priority = await this.prioritiesRepository.findOneBy({id: +createToDoDto.priority});

    const type = await this.typeRepository.findOneBy({id: +createToDoDto.type});

    return await this.toDoRepository.insert({...createToDoDto, priority, type});
  }

  async findAll() {
    return await this.toDoRepository.find();
  }

  async findOne(id: number) {
    return await this.toDoRepository.findOneBy({ id });
  }

  async update(id: number, updateToDoDto: UpdateToDoDto) {
    
    const priority = await this.prioritiesRepository.findOneBy({id: +updateToDoDto.priority});

    const type = await this.typeRepository.findOneBy({id: +updateToDoDto.type});

    return this.toDoRepository.update(id, {...updateToDoDto, priority, type});
  }

  async remove(id: number) {
    return await this.toDoRepository.delete(id);
  }
}
