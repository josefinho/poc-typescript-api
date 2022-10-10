import { Router } from "express";
import { CandidateController } from "../controllers/CandidateController";

const candidatesRoute = Router();
const candidateController = new CandidateController();

candidatesRoute.post('/', candidateController.createCandidate);
candidatesRoute.get('/', candidateController.findOne);

export { candidatesRoute };
