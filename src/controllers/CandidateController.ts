import {Request, Response} from 'express';
import { CreateCandidateService } from '../services/CreateCandidateService';
import { ApplyToAJobService } from '../services/ApplyToAJobService'
import { ApiError } from '../libs/ApiError';
import { FindCandidateService } from '../services/FindCandidateService';

class CandidateController {
    public async createCandidate(req: Request, res: Response) {
        const {name, bio, email, phone, open_to_work} = req.body;

        await new CreateCandidateService()
            .execute({name, bio, email, phone, open_to_work});

        return res.sendStatus(201);
    }

    public async findOne(req: Request, res: Response) {
        const candidate_id = Number(req.params.id);
        const candidate = await new FindCandidateService()
            .execute(candidate_id);

        return res.status(200).json({
            candidate
        })
    }

    public async applyToAJob(req: Request, res: Response) {
        const candidate_id = Number(req.params.candidate_id);
        const job_id = Number(req.params.job_id);

        await new ApplyToAJobService()
            .execute({candidate_id, job_id});
        
        return res.sendStatus(201);
    }
}

export { CandidateController };
