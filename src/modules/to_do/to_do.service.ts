import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to_do.dto';
import { UpdateToDoDto } from './dto/update-to_do.dto';
import { Repository } from 'typeorm';
import { ToDoEntity } from '../../entities/to_do.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ToDoService {

  constructor(
    @InjectRepository(ToDoEntity)
    private toDoRepository: Repository<ToDoEntity>,
  ){}

  async create(createToDoDto: CreateToDoDto) {
    return await this.toDoRepository.insert(createToDoDto)
  }

  async findAll() {
    return await this.toDoRepository.find();
  }

  async findOne(id: number) {
    return await this.toDoRepository.findOneBy({ id });
  }

  async update(id: number, updateToDoDto: UpdateToDoDto) {
    return this.toDoRepository.update(id, updateToDoDto);
  }

  async remove(id: number) {
    return await this.toDoRepository.delete(id);
  }
}
