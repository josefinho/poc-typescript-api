import { BaseEntity, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Job } from './Job'
import { Candidate } from "./Candidate";

@Entity('job_candidates')
class Job_candidate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Candidate, (candidate) => candidate.jobCandidates, {nullable: true})
    candidate: Candidate;

    @ManyToOne(() => Job, (job) => job.jobCandidates)
    job: Job | null;

}

export { Job_candidate };