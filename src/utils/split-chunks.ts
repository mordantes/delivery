import { Configstore } from "./configstore"

// optionaly function
// in order im try to collect data with for cycle with chunks
// and separatly and async'ly requesting to API 
// bad variant
export const SplitChunks = (totalSize: number) => {
	const chunkSize = Configstore('CHUNK') as string
	const size = Div(totalSize, parseInt(chunkSize))
	return size
}


const Div = (target: number, sub: number) =>  ((target - (target%sub))/sub) + 1

