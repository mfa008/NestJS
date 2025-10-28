import { BadRequestException, Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma.service';
import { CreatePlayerDTO } from './dto/create-player.dto';
import { UpdatePlayerDTO } from './dto/update-player.dto';
@Injectable()
export class PlayerService {
    constructor(private readonly prisma:PrismaService){}

    async getAllPlayer(){
        return await this.prisma.player.findMany();
    }

    async getOnePlayer(id:number){
        const player = this.prisma.player.findUnique({
            where: {id}
        })

        if(!player) {
            throw new NotFoundError("Le joueur n'a pas ete trouve ");
        }

        return await player; 
    }

    async createPlayer(data : CreatePlayerDTO){
        return await this.prisma.player.create({ data });
    }

    async updatePlayer(id: number, data : UpdatePlayerDTO ) {
        const playerExist = this.prisma.player.findUnique({
            where: {id}
        });

        if (!playerExist){
            throw new BadRequestException("Ce joueur n'existe pas ")
        }

        return await this.prisma.player.update({
            where: {id},
            data
        })
    }

    async deletePlayer(id: number){
        const player = this.prisma.player.findUnique({
            where: {id}
        })
        if (!player){
            throw new BadRequestException("Ce joueur n'existe pas ");
        }
        return this.prisma.player.delete({
            where: {id}
        })

    }

    getAllPlayerByTeam(teamId : number){
        return this.prisma.player.findMany({
            where: {teamId}
        });
    }

    getAllPlayerByPosition(positionId : number){
        return this.prisma.player.findMany({
            where: {positionId}
        });
    }
}
