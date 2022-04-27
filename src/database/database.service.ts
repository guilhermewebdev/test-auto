import { Injectable } from '@nestjs/common';
import knex, { Knex } from 'knex';

@Injectable()
export class DatabaseService {
    protected readonly db: Knex;
    constructor() {
        this.db = knex({
            client: 'sqlite3', // or 'better-sqlite3'
            connection: {
                filename: "./mydb.sqlite"
            }
        })
    }

    public query(table: string) {
        return this.db(table);
    }
}
