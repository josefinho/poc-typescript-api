import { PostgresDataSource } from "./config/data-source";
import express from 'express';


PostgresDataSource.initialize()
    .then(() => {

        const app = express();

        app.use(express.json());

        app.listen(process.env.APP_PORT);

        console.log("DataSouce has been initialized.")
    })
    .catch(err => console.log("Error on DataSouce initialization.", err));

