import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';
import { PrismaService } from '../prisma.service';
@Module({
  controllers: [PositionController],
  providers: [PositionService, PrismaService],
})
export class PositionModule {}
