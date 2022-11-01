import { Router } from 'express';
import { JobController } from './JobController';

const jobsRoute = Router();
const jobController = new JobController();

jobsRoute.post('/', jobController.createOne);

export { jobsRoute };