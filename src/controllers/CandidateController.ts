import {Request, Response} from 'express';
import { CreateCandidateService } from '../services/CreateCandidateService';

class CandidateController {
    public async createCandidate(req: Request, res: Response) {
        const {name, bio, email, phone, open_to_work} = req.body;


        throw new Error('bruh');

        new CreateCandidateService()
            .execute({name, bio, email, phone, open_to_work});

        return res.sendStatus(201);
    }

    public async findOne(req: Request, res: Response) {
        return res.status(200).json({msg: "Aewhoooo"});
    }
}

export { CandidateController };
