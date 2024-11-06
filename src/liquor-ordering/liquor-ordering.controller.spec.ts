import { Test, TestingModule } from '@nestjs/testing';
import { LiquorOrderingController } from './liquor-ordering.controller';

describe('LiquorOrderingController', () => {
  let controller: LiquorOrderingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiquorOrderingController],
    }).compile();

    controller = module.get<LiquorOrderingController>(LiquorOrderingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
