import {Request, Response} from 'express';
import { CreateCandidateService } from '../services/CreateCandidateService';
import { ApplyToAJobService } from '../services/ApplyToAJobService'

class CandidateController {
    public async createCandidate(req: Request, res: Response) {
        const {name, bio, email, phone, open_to_work} = req.body;

        new CreateCandidateService()
            .execute({name, bio, email, phone, open_to_work});

        return res.sendStatus(201);
    }

    public async findOne(req: Request, res: Response) {
        return res.status(200).json({msg: "Aewhoooo"});
    }

    public async applyToAJob(req: Request, res: Response) {
        const candidate_id = Number(req.params.candidate_id);
        const job_id = Number(req.params.job_id);

        new ApplyToAJobService()
            .execute({candidate_id, job_id});
        
        return res.sendStatus(201);
    }
}

export { CandidateController };
