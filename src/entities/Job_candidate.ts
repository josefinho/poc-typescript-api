import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Job } from './Job'
import { Candidate } from "./Candidate";

@Entity('job_candidates')
class Job_candidate {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Candidate, (candidate) => candidate.jobCandidates)
    candidate: number;

    @ManyToOne(() => Job, (job) => job.jobCandidates)
    job: number;

}

export { Job_candidate };