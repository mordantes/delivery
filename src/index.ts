import express, {  Request, Response } from 'express'
import { initDbConnection } from "./utils/db-connect";
import { scraper } from "./api/scraper";
import {validationResult, buildCheckFunction} from 'express-validator'

// custom check type. you can use 'query'
const checkQuery = buildCheckFunction(['query'])

const server = express()

// when server started init connection to db
server.listen(5001, ()=> {
	initDbConnection()
	// PORT recommended to be in .env file
	console.log('started on PORT 5000')
})

// initialize collection reviews from API
server.get('/scrape', scraper.start)
// get results of reviews amount from DB
server.get('/result', 
// validate query parameters (page listing, filter by author (for ex.) and etc.)
	[
		checkQuery('take', 'take parameter should be a number').isNumeric(),
		checkQuery('offset', 'offset parameter should be a number').isNumeric(),
		checkQuery('orderBy', 'orderBy parameter should be a rated, icon or author').isIn(['rated', 'icon', 'author']),
		checkQuery('dir', 'dir parameter should be a 1 or -1 ').exists().bail().isIn([-1, 1]),
	]
, (req: Request, res : Response) =>{
	try{
		// check validation errors
		const errors = validationResult(req);
		// if one is exists return error message
		if (!errors.isEmpty()) {
			return res.status(500).json({ errors: errors.array()});
		}
		// otherwise return results from DB
		return scraper.result({req,res})
	}catch(e){
		// create error message when something get wrong unhandled
		res.status(400).json(e);
	}
	
})


