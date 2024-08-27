import { Module } from '@nestjs/common';
import { ToDoService } from './to_do.service';
import { ToDoController } from './to_do.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from './entities/to_do.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ToDoEntity])
  ],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule {}
