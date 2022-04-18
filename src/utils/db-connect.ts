import { Configstore } from "../utils/configstore";
import { connect } from "mongoose"
const uri = `mongodb+srv://${Configstore('MONGO_USER')}:${Configstore('MONGO_PWD')}@cluster0.fitvd.mongodb.net/${Configstore('MONGO_DB')}?retryWrites=true&w=majority`


// connect to mongoDB
export async function initDbConnection(){
	try{
		await connect(uri, { autoCreate: true})
	}catch(e){
		throw e
	}
}


