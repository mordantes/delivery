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
exports.GetReview = void 0;
const review_1 = require("../models/review");
const GetReview = ({ take, offset, filter, orderBy, dir }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield review_1.Reviews.aggregate(aggregation(filter))
            .sort({ [orderBy]: dir })
            .skip(parseInt(offset))
            .limit(parseInt(take));
        return data;
    }
    catch (e) {
        throw e;
    }
});
exports.GetReview = GetReview;
const aggregation = (term) => [
    {
        $project: {
            _id: "$_id",
            author: "$author",
            answers: "$answers",
            body: "$body",
            icon: "$icon",
            rated: "$rated",
        },
    },
    term === undefined ? {
        $match: {
            _id: { $exists: true }
        }
    } : {
        $match: review_1.Reviews.where({ "author": { '$regex': new RegExp(term), $options: 'i' } }).cast(review_1.Reviews)
    },
];
