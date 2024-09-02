import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToBuyService } from './to_buy.service';
import { CreateToBuyDto } from './dto/create-to_buy.dto';
import { UpdateToBuyDto } from './dto/update-to_buy.dto';

@Controller('to-buy')
export class ToBuyController {
  constructor(private toBuyService: ToBuyService) {}

  @Post()
  create(@Body() createToBuyDto: CreateToBuyDto) {
    return this.toBuyService.create(createToBuyDto);
  }

  @Get()
  findAll() {
    return this.toBuyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toBuyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToBuyDto: UpdateToBuyDto) {
    return this.toBuyService.update(+id, updateToBuyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toBuyService.remove(+id);
  }
}
