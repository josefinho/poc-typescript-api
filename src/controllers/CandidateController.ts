import {Request, Response} from 'express';
import { CreateCandidateService } from '../services/CreateCandidateService';
import { ApplyToAJobService } from '../services/ApplyToAJobService'
import { Candidate } from '../entities/Candidate';
import { ApiError } from '../libs/ApiError';

class CandidateController {
    public async createCandidate(req: Request, res: Response) {
        const {name, bio, email, phone, open_to_work} = req.body;

        await new CreateCandidateService()
            .execute({name, bio, email, phone, open_to_work});

        return res.sendStatus(201);
    }

    public async findOne(req: Request, res: Response) {
        const { candidate_id } = req.body;
        const candidate = await Candidate.findOneBy({id: candidate_id});

        if(candidate === null)
            throw new ApiError("Candidate not found.", 404);

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
