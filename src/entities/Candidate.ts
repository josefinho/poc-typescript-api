import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
class Candidate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    bio: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    open_to_work: boolean;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Candidate };
