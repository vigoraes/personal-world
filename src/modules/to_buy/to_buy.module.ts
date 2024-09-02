import { Module } from '@nestjs/common';
import { ToBuyService } from './to_buy.service';
import { ToBuyController } from './to_buy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToBuyEntity } from './entities/to_buy.entity';
import { TypesEntity } from '../type/entities/types.entity';
import { PrioritiesEntity } from '../priority/entities/priorities.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ToBuyEntity, TypesEntity, PrioritiesEntity])
  ],
  controllers: [ToBuyController],
  providers: [ToBuyService],
})
export class ToBuyModule {}
