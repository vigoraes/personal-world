import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesEntity } from './entities/types.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypesEntity])
  ],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
