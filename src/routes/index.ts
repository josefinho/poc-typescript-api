import { Router } from "express";
import { candidatesRoute } from "./candidates.route";

const routes = Router();

routes.use('/candidates', candidatesRoute);

export { routes };
