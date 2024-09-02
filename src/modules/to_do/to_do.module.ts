import { Module } from '@nestjs/common';
import { ToDoService } from './to_do.service';
import { ToDoController } from './to_do.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from './entities/to_do.entity';
import { TypesEntity } from '../type/entities/types.entity';
import { PrioritiesEntity } from '../priority/entities/priorities.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ToDoEntity, TypesEntity, PrioritiesEntity])
  ],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule {}
