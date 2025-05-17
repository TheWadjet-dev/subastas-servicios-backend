import { Test, TestingModule } from '@nestjs/testing';
import { SubastasController } from './subastas.controller';

describe('SubastasController', () => {
  let controller: SubastasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubastasController],
    }).compile();

    controller = module.get<SubastasController>(SubastasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
