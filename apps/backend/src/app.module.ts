import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { CompleteModule } from './complete/complete.module';

@Module({
  imports: [NinjasModule, CompleteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
