import {DataSource} from "typeorm";

const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'poc',
    entities: ["../entities/*.ts"]
});

export { PostgresDataSource };
