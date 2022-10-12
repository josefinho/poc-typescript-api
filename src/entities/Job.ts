import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Job_candidate } from "./Job_candidate";

@Entity('jobs')
class Job {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    description: string;
    
    @Column()
    limit_date: Date;

    //company_id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Job_candidate, (job) => job.job)
    jobCandidates: Job_candidate[];
}

export { Job };