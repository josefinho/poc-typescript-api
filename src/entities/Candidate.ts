import {BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Job_candidate } from "./Job_candidate";

@Entity('candidates')
class Candidate extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    bio: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    open_to_work: boolean;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Job_candidate, (jobCandidate) => jobCandidate.candidate)
    jobCandidates: Job_candidate[];

}

export { Candidate };
