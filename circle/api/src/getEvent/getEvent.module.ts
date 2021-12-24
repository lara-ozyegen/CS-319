import { Module } from '@nestjs/common';
import { GetEventController } from './getEvent.controller';
import { GetEventService } from './getEvent.service';

@Module({
  imports: [],
  providers: [GetEventService],
  controllers: [GetEventController],
  exports: [],
})
export class GetEventModule {}