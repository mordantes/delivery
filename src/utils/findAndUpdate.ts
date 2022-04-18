import { HashedReview } from "../api/types";
import { Reviews } from "../models/review";


// find record with it only one parameters and variables to transfer
export const FindAndUpdate = async(obj : HashedReview) => {
	try{
		// find by ID
		const filter = { name: obj.authorHash };
		// update answer object and answerHash case it both was changed 
		const update = { answers: obj.answers, answerHash: obj.answerHash };
		await Reviews.findOneAndUpdate(filter, update);
	}catch(e){
		throw e
	}
}