import { IsEmail,IsString,Length } from "class-validator";

export class RegisterUserDto {
    @Length(2,20)
    @IsString()
    name:string
    @IsString()
    @Length(2,20)
    password:string
    @IsEmail()
    email:string
}


