import { Module } from '@nestjs/common';
import { FullService } from './full.service';
import { FullController } from './full.controller';

@Module({
  controllers: [FullController],
  providers: [FullService],
})
export class FullModule {}
