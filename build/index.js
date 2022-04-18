"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connect_1 = require("./utils/db-connect");
const scraper_1 = require("./api/scraper");
const express_validator_1 = require("express-validator");
// custom check type. you can use 'query'
const checkQuery = (0, express_validator_1.buildCheckFunction)(['query']);
const server = (0, express_1.default)();
// when server started init connection to db
server.listen(5001, () => {
    (0, db_connect_1.initDbConnection)();
    // PORT recommended to be in .env file
    console.log('started on PORT 5000');
});
// initialize collection reviews from API
server.get('/scrape', scraper_1.scraper.start);
// get results of reviews amount from DB
server.get('/result', 
// validate query parameters (page listing, filter by author (for ex.) and etc.)
[
    checkQuery('take', 'take parameter should be a number').isNumeric(),
    checkQuery('offset', 'offset parameter should be a number').isNumeric(),
    checkQuery('orderBy', 'orderBy parameter should be equals to - rated, icon or author').isIn(['rated', 'icon', 'author']),
    checkQuery('dir', 'dir parameter should be equals to a 1 or -1 ').exists().bail().isIn([-1, 1]),
], (req, res) => {
    try {
        // check validation errors
        const errors = (0, express_validator_1.validationResult)(req);
        // if one is exists return error message
        if (!errors.isEmpty()) {
            return res.status(500).json({ errors: errors.array() });
        }
        // otherwise return results from DB
        return scraper_1.scraper.result({ req, res });
    }
    catch (e) {
        // create error message when something get wrong unhandled
        res.status(400).json(e);
    }
});
