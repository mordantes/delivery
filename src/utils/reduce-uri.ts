import { ApiURL } from "./api-url"
import { Configstore } from "./configstore"
import { SplitChunks } from "./split-chunks"

// create an array of URL that needs to collect
export const reduceURI = (total: number)=>{
	try{
		const uri:string[] =[]
		const chunks = SplitChunks(total-10)
		for (let i = 0; i<(chunks+1); i++){
			const amount = parseInt(Configstore('CHUNK') as string)
			const currentURI = ApiURL(amount, (i*amount)+10)
			uri.push(currentURI)
		}
		return uri
	}catch(e){
		throw e
	}
}