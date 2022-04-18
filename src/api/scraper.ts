import { GetReview } from "./get-review";
import { QueryParams, RouteProps } from "./types";
import { collectAndUpdate } from "./update";

class Scraper {
	// is private to avoid errors
	private isWork : boolean
	constructor(){
		this.isWork = false
	}
	// initialize collecting data
	// isWork parameters will order to prevent duplicate parsing flow started
	start = async({ req, res }: RouteProps) => {
		try{
			if (!this.isWork) {
				// set val to true
				this.isWork = true
				// start collecting
				collectAndUpdate(this.isWork)
			}
			// return message
			return res.json({statusCode : 102, message: 'Already in work'})
		// if something wrong return error's message 
		}catch(e){
			res.json({statusCode : 500 , message : e as string})
		}
	
	}
	// route that return result from database
	result = async({ req, res }: RouteProps) =>{
		try{
			// if work flow is active return message
			// ONLY for this task block process of getting old data from database
			// otherwise you can return old data with message that new one will return after few times
			if (this.isWork){
				return res.json({statusCode : 102, message : 'Please wait, collecting data...'} )
			}
			// to set query object to 'custom' obj set req.query to unknown
			const params= req.query as unknown as QueryParams
			// get data from db
			const toFront = await GetReview(params)
			return res.send(toFront)
		}catch(e){
			res.json({statusCode : 500 , message : e as string})
		}
		
	}

}

export const scraper = new Scraper()
