import { Test, TestingModule } from '@nestjs/testing';
import { SubastasService } from './subastas.service';

describe('SubastasService', () => {
  let service: SubastasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubastasService],
    }).compile();

    service = module.get<SubastasService>(SubastasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
