import {DataSource} from "typeorm";
import 'reflect-metadata'
import { Candidate } from "../entities/Candidate";
import { Job_candidate } from "../entities/Job_candidate";
import { Job } from "../entities/Job";

const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'poc',
    entities: [Candidate, Job_candidate, Job],
    synchronize: true
});

export { PostgresDataSource };
