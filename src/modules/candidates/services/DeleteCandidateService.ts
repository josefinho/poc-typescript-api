import { Candidate } from "../../../entities/Candidate";
import { ApiError } from "../../../libs/ApiError";


class DeleteCandidateService {

    async execute(id: number) {
        const candidate = await Candidate.findOneBy({id});

        if(candidate === null)
            throw new ApiError("Candidate not found.", 404);
        
        await candidate.remove();
    }
}

export { DeleteCandidateService };