import { Request, Response } from "express"
import { CreateJobService } from "../services/CreateJobService"

class JobController {
    createOne(req: Request, res: Response) {
        const {title, description, limit_date} = req.body;

        new CreateJobService()
            .execute({title, description, limit_date});

        return res.sendStatus(201);
    }
}

export { JobController }