import { IsBoolean, IsDateString, IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateToBuyDto {
    @IsString()
    title: string;
    
    @IsOptional()
    @IsInt()
    @IsPositive()
    type?: number = 1;
    
    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsString()
    deadline?: string;
    
    @IsOptional()
    @IsInt()
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
