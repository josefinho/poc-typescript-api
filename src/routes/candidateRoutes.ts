import { Router } from "express";
import { CandidateController } from "../controllers/CandidateController";
import authenticationMiddleware from '../middlewares/authenticationMiddleware';

const candidatesRoute = Router();
const candidateController = new CandidateController();

candidatesRoute.post('/', candidateController.createCandidate);
candidatesRoute.post('/auth', candidateController.authenticate);
candidatesRoute.get('/:id', authenticationMiddleware, candidateController.findOne);
candidatesRoute.get('/:candidate_id/jobs/:job_id', authenticationMiddleware, candidateController.applyToAJob);
candidatesRoute.delete('/:id', authenticationMiddleware, candidateController.deleteOne);

export { candidatesRoute };
