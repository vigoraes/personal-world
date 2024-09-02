import { IsOptional, IsString } from "class-validator";

export class CreatePriorityDto {
    
    @IsString()
    title: string;
    
    @IsOptional()
    @IsString()
    description?: string;
}
