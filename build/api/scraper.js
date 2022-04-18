"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scraper = void 0;
const get_review_1 = require("./get-review");
const update_1 = require("./update");
class Scraper {
    constructor() {
        // initialize collecting data
        // isWork parameters will order to prevent duplicate parsing flow started
        this.start = ({ req, res }) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.isWork) {
                    // set val to true
                    this.isWork = true;
                    // start collecting
                    (0, update_1.collectAndUpdate)(this.isWork);
                }
                // return message
                return res.json({ statusCode: 102, message: 'Already in work' });
                // if something wrong return error's message 
            }
            catch (e) {
                res.json({ statusCode: 500, message: e });
            }
        });
        // route that return result from database
        this.result = ({ req, res }) => __awaiter(this, void 0, void 0, function* () {
            try {
                // if work flow is active return message
                // ONLY for this task block process of getting old data from database
                // otherwise you can return old data with message that new one will return after few times
                if (this.isWork) {
                    return res.json({ statusCode: 102, message: 'Please wait, collecting data...' });
                }
                // to set query object to 'custom' obj set req.query to unknown
                const params = req.query;
                // get data from db
                const toFront = yield (0, get_review_1.GetReview)(params);
                return res.send(toFront);
            }
            catch (e) {
                res.json({ statusCode: 500, message: e });
            }
        });
        this.isWork = false;
    }
}
exports.scraper = new Scraper();
