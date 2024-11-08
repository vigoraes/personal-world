import { Injectable } from '@nestjs/common';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PrioritiesEntity } from './entities/priorities.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PriorityService {
    constructor(
        @InjectRepository(PrioritiesEntity)
        private prioritiesRepository: Repository<PrioritiesEntity>
    ){}
    async create(createPriorityDto: CreatePriorityDto) {
        return await this.prioritiesRepository.insert(createPriorityDto);
    }
    
    async findAll() {
        return await this.prioritiesRepository.find();
    }
    
    async findOne(id: number) {
        return await this.prioritiesRepository.findOneBy({id});
    }
    
    async update(id: number, updatePriorityDto: UpdatePriorityDto) {
        return await this.prioritiesRepository.update(id, updatePriorityDto);
    }
    
    async remove(id: number) {
        return await this.prioritiesRepository.delete(id);
    }
}
