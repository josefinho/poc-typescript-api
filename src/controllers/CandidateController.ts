import {Request, Response} from 'express';
import { CreateCandidateService } from '../services/CreateCandidateService';
import { Job } from '../entities/Job';
import { Candidate } from '../entities/Candidate';
import { Job_candidate } from '../entities/Job_candidate';

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
        const candidate = await Candidate.findOneBy({id: candidate_id});

        const job_id = Number(req.params.job_id);
        const job = await Job.findOneBy({id: job_id});

        const job_candidate = new Job_candidate();

        if(candidate !== null)
            job_candidate.candidate = candidate;

        if(job !== null)
            job_candidate.job = job;

        await job_candidate.save();
        
        res.status(200).json(job_candidate);
    }
}

export { CandidateController };
