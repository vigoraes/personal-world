import { IsBoolean, IsDateString, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateToDoDto {
    
    @IsString()
    title: string;
    
    @IsOptional()
    @IsNumber()
    @IsPositive()
    type?: number = 1;
    
    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsDateString()
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
    finished?: boolean;
    
    @IsOptional()
    @IsDateString()
    finished_at?: string;
}
