import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterUserDto } from './dto/register.dto';
import { register } from 'module';
import { LoginDto  } from './dto/login.dto';
import { JwtAuthGuard } from './auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData);
  }
}