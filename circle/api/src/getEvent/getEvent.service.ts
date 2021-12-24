import { Injectable } from '@nestjs/common';
import { Storage } from '../common/S3';

@Injectable()
export class GetEventService {
  async getEvent(
  ): Promise<any> {
    const bucket = "cs319-event";
    const file = await Storage.get(`IEEE_1.json`, bucket);
    const fileContent = file.Body?.toString('utf-8');
    return JSON.parse(fileContent);
  }
}
