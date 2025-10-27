import { BadRequestException, Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) {}
  // Retourner tous les positions
  async getAllPosition() {
    return await this.prisma.position.findMany();
  }
  async getOneposition(id: number) {
    const position = await this.prisma.position.findUnique({
      where: { id },
    });
    if (!position) {
      throw new NotFoundError("Aucun position n'existe avec cet id ");
    }
    return await position;
  }

  async createPosition(data) {
    // const positionExist = await this.prisma.position.findFirst({
    //   where: { name: data.name },
    // });

    // if (positionExist) {
    //   throw new BadRequestException('Cette poste existe deja ');
    // }

    return await this.prisma.position.create({ data });
  }

  async updatePosition( id: number, data) {
    const position = await this.prisma.position.findUnique({
      where: { id },
    });
    if (!position) {
      throw new NotFoundError("Aucun position n'existe avec cet id ");
    }
    return await this.prisma.position.update({
      where: { id },
      data,
    });
  }
  
  async deletePosition(id:number) {
    const positionExist = await this.prisma.position.findUnique({
        where: {id}
    });

    if (!positionExist){
        throw new NotFoundError("Position non trouve ");
    }

    return await this.prisma.position.delete({
        where: {id}
    });

  }

}
