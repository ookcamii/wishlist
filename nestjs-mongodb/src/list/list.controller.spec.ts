import { Test, TestingModule } from '@nestjs/testing';
import { listController } from './list.controller';
import { ListService } from './list.service';

describe('ListController', () => {
  let controller: listController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [controller],
      providers: [ListService],
    }).compile();

    controller = module.get<listController>(controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
