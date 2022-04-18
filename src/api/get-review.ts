import { Reviews } from "../models/review"
import { QueryParams } from "./types"


export const GetReview = async(
	{take  , offset , filter , orderBy ,  dir } : QueryParams
)=> {
	try{
		const data =  await Reviews.aggregate(aggregation(filter))
								.sort({[orderBy] :  dir})
								.skip(parseInt(offset))
								.limit(parseInt(take))
								
		return data
	}catch(e){
		throw e
	}
}


const aggregation = (term: string | undefined) => [
	{
		$project: {
			_id : "$_id",
			author : "$author" ,
			answers: "$answers" ,
			body: "$body" ,
			icon: "$icon" ,
			rated: "$rated" ,
		},
		  
	},
	term === undefined ? {
		$match: {
				_id : {$exists: true}
		} 
		
	} : {
			$match: Reviews.where({"author": {'$regex': new RegExp(term), $options:'i'}  }).cast(Reviews) 
	},

]