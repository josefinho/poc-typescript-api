import { Job } from "../../../entities/Job";
import { ApiError } from "../../../libs/ApiError";

interface IRequest {
    title: string;
    description: string;
    limit_date: string;
}

class CreateJobService {
    private isLimitDateInvalid(limit_date: string): boolean {
        const isLimitDateInvalid: boolean = isNaN(Date.parse(limit_date));

        return isLimitDateInvalid;
    }

    async execute({title, description, limit_date}: IRequest) {

        if (this.isLimitDateInvalid(limit_date))
            throw new ApiError("Invalid Date");

        const newJob = Job.create({ title, description, limit_date });
        await newJob.save();

    }
}

export { CreateJobService };