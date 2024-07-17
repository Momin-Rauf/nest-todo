import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import {IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTodoDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    task : string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string
}
// input validation ya type checking hota hai yaha

// @IsNotEmpty()  - DECORATOR
// task : string  -> var and its type

// description?  -> QUESTION MARK MEANS THAT FIELD IS OPTIONAL