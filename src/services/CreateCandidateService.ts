import { Candidate } from '../entities/Candidate';
import { ApiError } from '../libs/ApiError';

interface IRequest {
    name: string;
    bio: string;
    email: string;
    password: string;
    phone: string;
    open_to_work: boolean;
}

class CreateCandidateService {
    async execute({name, bio, email, password, phone, open_to_work}: IRequest): Promise<void> {
        const newCandidate = Candidate.create({
            name,
            bio,
            email,
            password,
            phone,
            open_to_work,
        })

        await Candidate.save(newCandidate)
            .catch(e => {
                throw new ApiError("Failed on candidate creation. Check if request body has all the required attributes.")
            });
    }
}

export { CreateCandidateService };