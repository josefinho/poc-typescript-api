import { Router } from "express";
import { CandidateController } from "../controllers/CandidateController";

const candidatesRoute = Router();
const candidateController = new CandidateController();

candidatesRoute.post('/', candidateController.createCandidate);
candidatesRoute.post('/auth', candidateController.authenticate);
candidatesRoute.get('/:id', candidateController.findOne);
candidatesRoute.get('/:candidate_id/jobs/:job_id', candidateController.applyToAJob);
candidatesRoute.delete('/:id', candidateController.deleteOne);

export { candidatesRoute };
