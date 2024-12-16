import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { CsvToJsonService } from './csv-to-json.service';

@Controller('csv-to-json')
export class CsvToJsonController {
    constructor(private readonly csvToJsonService: CsvToJsonService) {}
    
    @Get('convert')
    async convert(@Res() res: Response): Promise<void> {
        try {
            const result = this.csvToJsonService.convertFile();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
