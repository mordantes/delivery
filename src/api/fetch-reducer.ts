import { fetchData } from "../utils/fetch-data";
import { HashedReview } from "./types";

export const fetchReducer = async(uri: string[]) =>{
	try{
		const total: HashedReview[]  = []
		for (const target of uri){
			const currentData = await fetchData(target)
			total.push(...currentData.reviews)
		}
		return total
	}catch(e){
		throw e
	}
}