import { Module } from '@nestjs/common';
import { PriorityService } from './priority.service';
import { PriorityController } from './priority.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrioritiesEntity } from './entities/priorities.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PrioritiesEntity])
  ],
  controllers: [PriorityController],
  providers: [PriorityService],
})
export class PriorityModule {}
