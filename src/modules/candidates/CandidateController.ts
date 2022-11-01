import {Request, Response} from 'express';
import {hash} from 'bcryptjs'
import { CreateCandidateService } from './services/CreateCandidateService';
import { ApplyToAJobService } from './services/ApplyToAJobService';
import { FindCandidateService } from './services/FindCandidateService';
import { DeleteCandidateService } from './services/DeleteCandidateService';
import { AuthenticateCandidateService } from './services/AuthenticateCandidateService'

class CandidateController {
    public async createCandidate(req: Request, res: Response) {
        const {name, bio, email, phone, open_to_work, password} = req.body;
        const hashedPassword = await hash(password, 8);

        await new CreateCandidateService()
            .execute({ name, bio, email, password: hashedPassword, phone, open_to_work });

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

    public async deleteOne(req: Request, res: Response) {
        const id = Number(req.params.id);

        await new DeleteCandidateService()
            .execute(id);
            
        return res.sendStatus(200);
    }

    public async authenticate(req: Request, res: Response) {
        const { email, password } = req.body;

        const data = await new AuthenticateCandidateService().execute({email, password});

        return res.status(200).json(data);
    }
}

export { CandidateController };
