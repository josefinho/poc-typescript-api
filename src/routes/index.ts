import { Router } from "express";
import { candidatesRoute } from "./candidateRoutes";

const routes = Router();

routes.use('/candidates', candidatesRoute);

export { routes };
