import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(createUser: CreateUserDTO) {
    const { firstName, lastName, email, password } = createUser;
    const userExist = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      throw new ConflictException("L'utilisatuer existe deja ");
    }
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const user = await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createAt: true,
      },
    });

    const payload = { sub: user.id, email: user.email };
    const acess_token = await this.jwt.signAsync(payload);
    return {
      user,
      acess_token,
    };
  }

  async login(loginUser: LoginUserDto) {
    const { email, password } = loginUser;
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException("L'utilisateur n'existe pas ");
    }
    const payload = { sub: user.id, email: user.email };
    const acess_token = await this.jwt.signAsync(payload);
    const checkpassword = await bcrypt.compare(password, user.password);

    if (!checkpassword) {
      throw new UnauthorizedException('Mot de passe incorrect ');
    }
    return {
      user: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createAt: true,
      },
      acess_token,
    };
  }

  async validateUser(id: number){
    
    const user = this.prisma.user.findUnique({
        where : {id}, 
        select : {
            id: true, 
            firstName: true, 
            lastName : true,
            email: true,
            createAt : true,  
        }
    
    }); 
    return user; 
    
  }
}
