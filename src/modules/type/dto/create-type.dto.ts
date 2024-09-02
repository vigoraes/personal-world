import { IsOptional, IsString } from "class-validator";

export class CreateTypeDto {
    
    @IsString()
    title: string;;
    
    @IsOptional()
    @IsString()
    description?: string;
}
