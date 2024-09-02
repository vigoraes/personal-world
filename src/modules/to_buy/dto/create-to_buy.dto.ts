import { IsBoolean, IsDateString, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateToBuyDto {

    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    title: string;
    
    @IsOptional()
    @IsPositive()
    type?: number = 1;
    
    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsString()
    deadline?: string;
    
    @IsOptional()
    @IsNumber()
    @IsPositive()
    priority?: number = 1;
    
    @IsOptional()
    @IsBoolean()
    active?: boolean;
    
    @IsOptional()
    @IsBoolean()
    buyed?: boolean;
    
    @IsOptional()
    @IsDateString()
    buyed_at?: string;
}
