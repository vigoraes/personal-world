import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePriorityDto {

    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    title: string;
    
    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    color?: string;
}
