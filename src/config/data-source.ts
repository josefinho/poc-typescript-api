import {DataSource} from "typeorm";

const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'poc'
});

PostgresDataSource.initialize()
    .then(() => {
        console.log("DataSouce has been initialized.")
    })
    .catch(err => console.log("Error on DataSouce initialization.", err));

export { PostgresDataSource };
