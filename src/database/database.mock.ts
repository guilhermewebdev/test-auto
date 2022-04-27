import { Injectable } from '@nestjs/common';
import knex, { Knex } from 'knex';
import { MockClient } from 'knex-mock-client';
import { DatabaseService } from './database.service';

@Injectable()
export class DatabaseMockService extends DatabaseService {
    protected readonly db: Knex;

    constructor() {
        super();
        this.db = knex({ client: MockClient });
    }
}
