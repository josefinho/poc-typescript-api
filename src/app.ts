import "express-async-errors";
import { PostgresDataSource } from "./config/data-source";
import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes/index';
import { ApiError } from "./libs/ApiError";


PostgresDataSource.initialize()
.then(() => {

    const app = express();

    app.use(express.json());
    app.use('/', routes);

    app.use( (error: Error, req: Request, res: Response, next: NextFunction) => {

        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        } else {
            return res.status(500).json({
                statusCode: 500,
                message: "Internal Server Error"
            })
        }

    } )

    app.listen(3000);

    console.log("DataSouce has been initialized.")

})
.catch(err => console.log("Error on DataSouce initialization.", err));

