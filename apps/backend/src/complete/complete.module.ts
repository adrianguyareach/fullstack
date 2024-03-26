import { Module } from '@nestjs/common';
import { CompleteService } from './complete.service';
import { CompleteController } from './complete.controller';

@Module({
  controllers: [CompleteController],
  providers: [CompleteService],
})
export class CompleteModule {}
