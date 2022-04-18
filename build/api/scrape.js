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
exports.Scrape = void 0;
const api_url_1 = require("../utils/api-url");
const fetch_data_1 = require("../utils/fetch-data");
const reduce_uri_1 = require("../utils/reduce-uri");
const fetch_reducer_1 = require("./fetch-reducer");
function Scrape() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // get initial request to get TOTAL variable of reviews amount
            const initial = (0, api_url_1.generateURl)({ limit: 10, offset: 0 });
            // get data from initial URL
            const data = yield (0, fetch_data_1.fetchData)(initial);
            // create an array of any existing url (in order with total length) with split parameter
            const uri = (0, reduce_uri_1.reduceURI)(data.total);
            // return total data from API
            return yield (0, fetch_reducer_1.fetchReducer)(uri);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.Scrape = Scrape;
