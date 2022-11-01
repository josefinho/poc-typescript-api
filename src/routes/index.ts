import { Router } from "express";
import { candidatesRoute } from "../modules/candidates/candidateRoutes";
import { jobsRoute } from "../modules/jobs/jobRoutes";

const routes = Router();

routes.use('/candidates', candidatesRoute);
routes.use('/jobs', jobsRoute);

export { routes };
