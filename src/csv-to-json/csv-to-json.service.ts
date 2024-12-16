import { Injectable } from '@nestjs/common';

@Injectable()
export class CsvToJsonService {
    convertFile() {
    const csvToJson = require('convert-csv-to-json');

    function convertCsvToJson(filePath, outputFilePath) {
      try {
        csvToJson
          .fieldDelimiter(',')
          .generateJsonFileFromCsv(filePath, outputFilePath);
        console.log(`Conversion completed! JSON saved at: ${outputFilePath}`);
      } catch (error) {
        console.error('Error during conversion:', error);
      }
    }

    // วิธีใช้งาน
    const filePath = 'src/csv-to-json/csvFile.csv'; // ไฟล์ CSV
    const outputFilePath = 'src/csv-to-json/output.json'; // ไฟล์ JSON ที่ต้องการสร้าง

    convertCsvToJson(filePath, outputFilePath);
  }
}
