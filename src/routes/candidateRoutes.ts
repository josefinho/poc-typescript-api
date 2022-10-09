import { Router } from "express";
import {CandidateController} from "../controllers/CandidateController";

const candidatesRoute = Router();
const candidateController = new CandidateController();

candidatesRoute.get('/', candidateController.get);
candidatesRoute.post('/', candidateController.post);

export { candidatesRoute };
