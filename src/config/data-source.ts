import {DataSource} from "typeorm";
import 'reflect-metadata'
import { Candidate } from "../entities/Candidate";

const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'poc',
    entities: [Candidate],
    synchronize: true
});

export { PostgresDataSource };
