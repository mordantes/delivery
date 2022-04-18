import { Reviews } from "../models/review"
import { Compare } from "../utils/compare-data"
import { FindAndUpdate } from "../utils/findAndUpdate"
import { Scrape } from "./scrape"


export const CollectAndUpdate = async(isWork : boolean) => {
	try{
		const dbData = await Reviews.find()
		const newData = await Scrape()
		// if is initial start then insert all data to database
		if (!dbData.length){
			const models = newData.map((rev) => new Reviews({ ...rev, _id : rev.authorHash }))
			const finded = await Reviews.bulkSave(models)
		}
		// else compare with new one
		const compared = Compare(dbData, newData)
		// update changes
		await Promise.all(compared.map(FindAndUpdate))
		// set isWork to false, that means scrape process was ended
		isWork = false
	}catch(e){
		throw e
	}
}