import { Router } from "express";
import { Candidate } from "../entities/Candidate";
import { Request, Response } from "express";

const candidatesRoute = Router();

candidatesRoute.get('/', (req, res) => {
    return res.status(200).json({msg: "Aewhoooo"});
})

candidatesRoute.post('/', async (req: Request, res: Response) => {
    const { 
        name, 
        bio, 
        email, 
        phone,
        open_to_work
    } = req.body;

    const newCandidate = Candidate.create({
        name,
        bio,
        email,
        phone,
        open_to_work,
    })

    await Candidate.save(newCandidate);

    return res.status(201).json(newCandidate);
})

export { candidatesRoute };
