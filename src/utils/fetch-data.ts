import axios from "axios"
import { ApiResponse } from "../api/types"
import { ResponseDto } from "../dto/response-dto"


export const fetchData = async(url: string) : Promise<ApiResponse>=>{
	try{
		//getting data
		const data = await axios.get(url)
		return {
			// data-transfer-object to get only needed fields
			reviews: data.data.reviews.map(ResponseDto),
			total: parseInt(data.data.total)
		}
	}catch(e){
		throw e
	}
}