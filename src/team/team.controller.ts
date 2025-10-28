import { Controller, Get, Post , Put , Delete, Param, ParseIntPipe, Body  } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
    constructor(private readonly TeamService: TeamService) {}

    @Get('/all')
    getAllTeam(){
        return this.TeamService.getAllTeam();
    }

    @Get('/:id')
    getOneTeam(@Param('id', ParseIntPipe) id:number) {
        return this.TeamService.getOneTeam(id); 
    }

    @Post('/create')
    createTeam(@Body() data : any ){
        return this.TeamService.createTeam(data);
    }

    @Put('/:id')
    updateTeam(@Param('id', ParseIntPipe) id:number, @Body() data:any ) {
        return this.TeamService.updateTeam(id,data);
    }

    @Delete('/:id')
    deleteTeam(@Param('id', ParseIntPipe) id:number) {
        return this.TeamService.deleteTeam(id);
    }


}
