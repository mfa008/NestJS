import { Controller, Get, Post , Put , Delete  } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
    constructor(private readonly TeamService: TeamService) {}

    @Get('/all')
    getAllTeam(){
        return this.TeamService.getAllTeam();
    }
}
