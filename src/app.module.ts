import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PositionModule } from './position/position.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [PositionModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
