import { Controller, Post, Body, Request, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { jwtAuhtGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('/register')
    async register(@Body() createUser: CreateUserDTO) {
        return this.authService.register(createUser); 
    }

    @Post('/login')
    login(@Body() loginUser : LoginUserDto){
        return this.authService.login(loginUser);
    }

    @UseGuards(jwtAuhtGuard)
    @Get('/validate')
    validate(@Request() req ){ 
        return this.authService.validateUser(req.user.sub); 
    }
}
