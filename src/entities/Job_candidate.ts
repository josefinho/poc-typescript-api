import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @Column()
    candidateId: number;

    @Column()
    jobId: number;

    @ManyToOne(() => Candidate, (candidate) => candidate.jobCandidates, {onDelete: 'CASCADE'})
    candidate: Candidate;

    @ManyToOne(() => Job, (job) => job.jobCandidates, {onDelete: 'CASCADE'})
    job: Job;

}

export { Job_candidate };