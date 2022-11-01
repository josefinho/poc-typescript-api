import { Request, Response, NextFunction } from "express";
import { ApiError } from "../libs/ApiError";
import { verify } from "jsonwebtoken";

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) 
        throw new ApiError("JWT Token is missing.", 401);

    try {
        verify(token, 'supersecretprivatekey');
    } catch {
        throw new ApiError('JWT Token is invalid.', 401)
    }

    return next();
}

export default authenticationMiddleware;