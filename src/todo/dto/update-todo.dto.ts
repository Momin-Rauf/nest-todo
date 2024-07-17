import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsOptional()
    status : TodoStatus
}

enum TodoStatus{ // ENUM DEFINE KARA HAI UPAR USE KARNE K LIYEy
    ACTIVE = 'ACTIVE',
    DONE = 'DONE'
}