import { Candidate } from "../../../entities/Candidate";
import { ApiError } from "../../../libs/ApiError";

class FindCandidateService {
    public async execute(id: number): Promise<Candidate> {
        const candidate = await Candidate.findOneBy({id});

        if(candidate === null)
            throw new ApiError("Candidate not found.", 404);

        return candidate;
    }
}

export { FindCandidateService };