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
exports.FindAndUpdate = void 0;
const review_1 = require("../models/review");
// find record with it only one parameters and variables to transfer
const FindAndUpdate = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // find by ID
        const filter = { name: obj.authorHash };
        // update answer object and answerHash case it both was changed 
        const update = { answers: obj.answers, answerHash: obj.answerHash };
        yield review_1.Reviews.findOneAndUpdate(filter, update);
    }
    catch (e) {
        throw e;
    }
});
exports.FindAndUpdate = FindAndUpdate;
