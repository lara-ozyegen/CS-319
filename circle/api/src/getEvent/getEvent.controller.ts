/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Get} from '@nestjs/common';
import { GetEventService } from './getEvent.service';

@Controller('api/getEvent')
export class GetEventController {
  constructor(private readonly getEventService: GetEventService) {}

  @Get()
  async getEventData() {
    return this.getEventService.getEvent();
  }
}
