import jwt from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { Candidate } from '../entities/Candidate';
import { ApiError } from '../libs/ApiError';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    candidate: Candidate;
    token: string;
}

class AuthenticateCandidateService {

    public async execute({email, password}: IRequest) {

        const candidate = await Candidate.findOneBy({email});

        if(candidate === null)
            throw new ApiError("Candidate not found.", 404);

        const hashedPassword = candidate.password;
        const doesMatch = await compare(password, hashedPassword)

        if(doesMatch === false)
            throw new ApiError("Password do not match.");

        const token = jwt.sign({}, 'supersecretprivatekey', {
            subject: String(candidate.id),
            expiresIn: '1d'
        });

        return {candidate, token};
    }
}

export { AuthenticateCandidateService };