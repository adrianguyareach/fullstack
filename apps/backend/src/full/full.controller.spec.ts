import { Test, TestingModule } from '@nestjs/testing';
import { FullController } from './full.controller';
import { FullService } from './full.service';

describe('FullController', () => {
  let controller: FullController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FullController],
      providers: [FullService],
    }).compile();

    controller = module.get<FullController>(FullController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
