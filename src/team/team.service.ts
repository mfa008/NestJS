import { BadRequestException, Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma.service';
import { CreateTeamDTO } from './dto/create-team.dto';
import { UpdateTeamDTO } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllTeam() {
    return await this.prisma.team.findMany();
  }

  async getOneTeam(id: number) {
    const team = await this.prisma.team.findUnique({
      where: { id },
    });

    if (!team) {
      throw new NotFoundError("L'equipe n'existe pas");
    }
    return team;
  }

  async createTeam(data: CreateTeamDTO) {
    return this.prisma.team.create({ data });
  }

  async updateTeam(id: number, data: UpdateTeamDTO) {
    const teamExist = await this.prisma.team.findUnique({
      where: { id },
    });
    if (!teamExist) {
      throw new BadRequestException("L'equipe n'existe pas ");
    }

    return this.prisma.team.update({
      where: { id },
      data,
    });
  }

  async deleteTeam(id:number){
    const teamExist = await this.prisma.team.findUnique({
        where : {id}
    });

    if (!teamExist) {
        throw new BadRequestException("Cette equipe n'existe pas ");
    }

    return await this.prisma.team.delete({
        where : {id}
    })
  }

}
