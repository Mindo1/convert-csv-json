import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvToJsonModule } from './csv-to-json/csv-to-json.module';


@Module({
  imports: [CsvToJsonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
