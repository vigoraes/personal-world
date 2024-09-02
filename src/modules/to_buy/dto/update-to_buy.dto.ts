import { PartialType } from '@nestjs/mapped-types';
import { CreateToBuyDto } from './create-to_buy.dto';

export class UpdateToBuyDto extends PartialType(CreateToBuyDto) {}
