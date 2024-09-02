import { Test, TestingModule } from '@nestjs/testing';
import { ToBuyController } from './to_buy.controller';
import { ToBuyService } from './to_buy.service';

describe('ToBuyController', () => {
  let controller: ToBuyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToBuyController],
      providers: [ToBuyService],
    }).compile();

    controller = module.get<ToBuyController>(ToBuyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
