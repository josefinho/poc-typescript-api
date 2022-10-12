import { PostgresDataSource } from "./config/data-source";
import express from 'express';
import { routes } from './routes/index';


PostgresDataSource.initialize()
.then(() => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use('/', routes);

    app.listen(3000);

    console.log("DataSouce has been initialized.")

})
.catch(err => console.log("Error on DataSouce initialization.", err));

