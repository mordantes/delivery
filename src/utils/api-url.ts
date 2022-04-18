import { Configstore } from "./configstore"



// construct true URL with parameters to get data from API
export const generateURl = ({limit, offset} : {limit: number , offset: number}) => {
	try{
		const mainURI = new URL(Configstore('API_URL') as string)
		mainURI.searchParams.append('chainId', '48274')
		mainURI.searchParams.append('limit', limit.toString())
		mainURI.searchParams.append('offset', offset.toString())
		return mainURI.toString()
	}catch(e){
		throw e
	}
}