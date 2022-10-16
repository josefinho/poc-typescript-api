import { Candidate } from "../entities/Candidate";
import { Job } from "../entities/Job";
import { Job_candidate } from "../entities/Job_candidate";


interface IRequest {
    candidate_id: number;
    job_id: number;
}

class ApplyToAJobService {

    public async execute({candidate_id, job_id}: IRequest) {
        const candidate = await Candidate.findOneBy({id: candidate_id});
        const job = await Job.findOneBy({id: job_id});
        const job_candidate = new Job_candidate();

        if(candidate !== null)
            job_candidate.candidate = candidate;

        if(job !== null)
            job_candidate.job = job;

        await job_candidate.save();
 
    }

}

export { ApplyToAJobService };