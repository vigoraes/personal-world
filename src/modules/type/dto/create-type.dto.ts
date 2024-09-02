import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTypeDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    title: string;;
    
    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    icon?: string;
}
