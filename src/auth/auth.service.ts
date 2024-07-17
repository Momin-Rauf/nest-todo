import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt' 
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor( // importing/intialising the database ??
    private readonly dataservice : DatabaseService,
    private readonly jwtService : JwtService             // why importing here and not upar ??
  ){}

  async login( loginData : LoginDto){
    // check if the user already exists or not
    const {email, password } = loginData;
    const user = await this.dataservice.user.findFirst({
      where :{
        email : email
      }
    })
    if( !user ){ // mtlb user doesn't exists
      // throw error
      throw new NotFoundException("No user exists with the entered email.")
    }
    // else - validate the user
    const validatePassword = await bcrypt.compare(password, user.password);
    // validatePassword will hold true or false value, acc to the comparison
    if( !validatePassword ){ // mtlb validatePassword == false, mtlb password match nhi hua
      throw new NotFoundException("Wrong password.");
    }
    // else login kra de, token de ??? - yes
    return {
      token : this.jwtService.sign({email})
    }
  }

  async register( registerData: RegisterUserDto ) {
    const user = await this.dataservice.user.findFirst({
      where : {
        email : registerData.email
      }
    })
    if( user ){ // mtlb user does exist
      throw new BadGatewayException('User with email already exists');
    }
    // else
    // hash the password
    registerData.password = await bcrypt.hash(registerData.password, 10);
    const res = await this.dataservice.user.create({data : registerData})
    return res;
  }

}

