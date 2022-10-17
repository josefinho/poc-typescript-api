import { Candidate } from "../entities/Candidate";
import { Job } from "../entities/Job";
import { Job_candidate } from "../entities/Job_candidate";
import { ApiError } from "../libs/ApiError";


interface IRequest {
    candidate_id: number;
    job_id: number;
}

class ApplyToAJobService {
    private jobApplicationAlreadyExists: boolean;

    private async checkIfJobApplicationAlreadyExists({candidate_id, job_id}: IRequest) {
        let jobApplication = await Job_candidate.findOne({
            where: {
                candidateId: candidate_id,
                jobId: job_id
            }
        })

        if(jobApplication)
            this.jobApplicationAlreadyExists = true;
        else
            this.jobApplicationAlreadyExists = false;
    }

    public async execute({candidate_id, job_id}: IRequest) {
        const candidate = await Candidate.findOneBy({id: candidate_id});
        const job = await Job.findOneBy({id: job_id});
        const job_candidate = new Job_candidate();

        if(candidate === null)
            throw new ApiError("Candidate not found.", 404);

        if(job === null)
            throw new ApiError("Job not found.", 404);

        await this.checkIfJobApplicationAlreadyExists({candidate_id, job_id});

        if(this.jobApplicationAlreadyExists)
            throw new ApiError("Candidate already applied for this job.")

        job_candidate.job = job;
        job_candidate.candidate = candidate;

        await job_candidate.save();
    }

}

export { ApplyToAJobService };