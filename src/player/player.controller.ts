import { Controller, Get, Param, ParseIntPipe  } from '@nestjs/common';
import { PlayerService } from './player.service';
@Controller('player')
export class PlayerController {
    constructor(private readonly PlayerService: PlayerService){}

    @Get('/all')
    getAllPlayer(){
        return this.PlayerService.getAllPlayer();
    }

    @Get('/:id')
    getOnePlayer(@Param('id', ParseIntPipe) id : number ) {
        return this.PlayerService.getOnePlayer(id);
    }
 
    @Get('/team/:teamId')
    getAllPlayerByTeam(@Param('teamId', ParseIntPipe) teamId: number){
        return this.PlayerService.getAllPlayerByTeam(teamId);
    }

    @Get('position/:positionId')
    getAllPlayerByPosition(@Param('positionId', ParseIntPipe) positionId : number ){
        return this.PlayerService.getAllPlayerByPosition(positionId);

    }

}
