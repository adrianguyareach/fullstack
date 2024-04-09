import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { CompleteModule } from './complete/complete.module';
import { FullModule } from './full/full.module';

@Module({
  imports: [NinjasModule, CompleteModule, FullModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
