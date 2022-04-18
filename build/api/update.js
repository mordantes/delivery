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
exports.collectAndUpdate = void 0;
const review_1 = require("../models/review");
const compare_data_1 = require("../utils/compare-data");
const findAndUpdate_1 = require("../utils/findAndUpdate");
const scrape_1 = require("./scrape");
const collectAndUpdate = (isWork) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbData = yield review_1.Reviews.find();
        const newData = yield (0, scrape_1.Scrape)();
        // if is initial start then insert all data to database
        if (!dbData.length) {
            const models = newData.map((rev) => new review_1.Reviews(Object.assign(Object.assign({}, rev), { _id: rev.authorHash })));
            yield review_1.Reviews.bulkSave(models);
        }
        // else compare with new one
        const compared = (0, compare_data_1.Compare)(dbData, newData);
        // update changes
        yield Promise.all(compared.map(findAndUpdate_1.FindAndUpdate));
        // set isWork to false, that means scrape process was ended
        isWork = !isWork;
    }
    catch (e) {
        throw e;
    }
});
exports.collectAndUpdate = collectAndUpdate;
