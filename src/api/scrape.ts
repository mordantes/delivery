import { ApiURL } from "../utils/api-url";
import { fetchData } from "../utils/fetch-data";
import { reduceURI } from "../utils/reduce-uri";
import { fetchReducer } from "./fetch-reducer";


export async function Scrape(){
	try{
		// get initial request to get TOTAL variable of reviews amount
		const initial = ApiURL(10, 0) 
		// get data from initial URL
		const data = await fetchData(initial)
		// create an array of any existing url (in order with total length) with split parameter
		const uri = reduceURI(data.total)
		// return total data from API
		return  await fetchReducer(uri)
	}catch(e){
		throw e
	}
}