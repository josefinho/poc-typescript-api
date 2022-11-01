import "express-async-errors";
import { PostgresDataSource } from "./config/data-source";
import express from 'express';
import { routes } from './routes/index';
import errorMiddleware from "./middlewares/errorMiddleware";


PostgresDataSource.initialize()
.then(() => {

    const app = express();

    app.use(express.json());
    app.use('/', routes);
    app.use(errorMiddleware);

    app.listen(3000);

    console.log("DataSouce has been initialized.")

})
.catch(err => console.log("Error on DataSouce initialization.", err));

