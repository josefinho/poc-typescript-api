import { Router } from "express";

const candidatesRoute = Router();

candidatesRoute.get('/', (req, res) => {
    return res.status(200).json({msg: "Aewhoooo"});
})

export { candidatesRoute };
