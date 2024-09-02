import { IsBoolean, IsDateString, IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateToDoDto {
    
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
    @IsDateString()
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
    finished?: boolean;
    
    @IsOptional()
    @IsDateString()
    finished_at?: string;
}
