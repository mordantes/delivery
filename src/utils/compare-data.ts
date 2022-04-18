import { HashedReview } from "../api/types";


export const Compare = (old: HashedReview[], current: HashedReview[]) => {
	try{
		// if db data is empty return all new data
		if (!old) return current
		const filtered = current.filter((rev) => {
			// if current review not exist in database add it
			const isExist = old.find((curr)=> rev.authorHash !== curr.authorHash)
			if (!isExist) return rev
			// if in database exists author+rated params but answers is not equal, update it
			const isChanged = old.find((curr) => rev.authorHash === curr.authorHash && rev.answerHash !== curr.answerHash)
			if (isChanged) return rev
		})
		return filtered
	}catch(e){
		throw e
	}
}