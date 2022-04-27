import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getTracker, MockClient } from 'knex-mock-client';
import { join, resolve } from 'path';
import { DatabaseMockService } from 'src/database/database.mock';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';


describe('UserService', () => {
  let service: UserService;
  
  jest.mock('../database/database.service.ts');
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, DatabaseService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', async () => {
    await service.findAll()
    expect(service).toBeDefined();
  });
});
