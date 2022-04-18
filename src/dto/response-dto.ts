import {  HashedReview } from "../api/types"
import {sha256} from 'hash.js'


export const ResponseDto = (obj: any):HashedReview=>{
	return {
		// in received task there are not any information about what fields i should get from answer object
		// than we get body and creation date
		answers: obj.answers.map((ans: any)=> {
			return {
				body: ans.answer,
				createdAt: ans.createdAt
			}
		}) || [],
		author: obj.author,
		body: obj.body,
		icon: obj.icon,
		rated: obj.rated,
		// in this case i think that variables AUTHOR and RATED can't change
		// then i get it and hashed to create ID parameter of review
		// to find uniq objects from API
		authorHash: sha256().update(obj.author+obj.rated).digest('hex'),
		// here we hashing answers object, and if there are some changes
		// answerHash will changed, but authorHash is not
		// in future we can find review by authorHash (ID) and check if it's answers changed
		answerHash: sha256().update(obj.answers).digest('hex'),
	}
}