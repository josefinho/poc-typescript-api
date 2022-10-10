import { Candidate } from '../entities/Candidate';

interface IRequest {
    name: string;
    bio: string;
    email: string;
    phone: string;
    open_to_work: boolean;
}

class CreateCandidateService {
    async execute({name, bio, email, phone, open_to_work}: IRequest): Promise<void> {
        const newCandidate = Candidate.create({
            name,
            bio,
            email,
            phone,
            open_to_work,
        })

        await Candidate.save(newCandidate);
    }
}

export { CreateCandidateService };