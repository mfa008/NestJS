import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('/register')
    async register(@Body() createUser: CreateUserDTO) {
        return this.authService.register(createUser); 
    }


}
