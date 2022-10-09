import {Request, Response} from 'express';
import { Candidate } from '../entities/Candidate';

class CandidateController {
    public async post(req: Request, res: Response) {

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
    }

    public async get(req: Request, res: Response) {
        return res.status(200).json({msg: "Aewhoooo"});
    }
}

export { CandidateController };
