import { Test, TestingModule } from '@nestjs/testing';
import { ToBuyService } from './to_buy.service';

describe('ToBuyService', () => {
  let service: ToBuyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToBuyService],
    }).compile();

    service = module.get<ToBuyService>(ToBuyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
