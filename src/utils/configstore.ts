require('dotenv').config()

// used to get props from ENV file
// if needed file name is provide by >config< variables

export const Configstore = (val: string) => {
	try{
		return process.env[val]
	}catch(e){
		throw new Error(e as string)
	}
}