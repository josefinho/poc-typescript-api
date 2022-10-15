import { Router } from "express";
import { candidatesRoute } from "./candidateRoutes";
import { jobsRoute } from "./jobRoutes"

const routes = Router();

routes.use('/candidates', candidatesRoute);
routes.use('/jobs', jobsRoute);

export { routes };
