import { Body, Controller, Get, Put, Delete, Post, Param, ParseIntPipe } from '@nestjs/common';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
    constructor(private readonly PositionService : PositionService ){}
    @Get('all')
    getAllPosition() {
        return this.PositionService.getAllPosition();
    }

    @Get('/:id')
    getOnePosition(@Param('id', ParseIntPipe) id:number){
        return this.PositionService.getOneposition(id);
    }

    @Post('/create')
    createPosition(@Body() data : any ){
        return this.PositionService.createPosition(data);
    }

    @Put('/:id')
    updatePosition(@Param('id', ParseIntPipe) id : number , @Body() data : any ){
        return this.PositionService.updatePosition(id,data);

    }

    @Delete('/:id')
    deletePosition(@Param('id', ParseIntPipe) id:number){
        return this.PositionService.deletePosition(id);
    }
}
