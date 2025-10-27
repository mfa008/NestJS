import { Controller, Get } from '@nestjs/common';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
    constructor(private readonly PositionService : PositionService ){}
    @Get('all')
    getAllPosition() {
        return this.PositionService.getAllPosition();
    }
}
