import { ApiError } from "../libs/ApiError";
import { Request, Response, NextFunction } from "express";

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {

    console.error(error);

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

}

export default errorMiddleware;