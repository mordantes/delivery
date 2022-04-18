"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSchema = exports.Reviews = void 0;
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    answers: {
        type: Array,
        required: false
    },
    body: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    rated: {
        type: Date,
        required: true,
    },
    answerHash: {
        type: String,
        require: true,
    },
});
exports.ReviewSchema = ReviewSchema;
const Reviews = (0, mongoose_1.model)("reviews", ReviewSchema);
exports.Reviews = Reviews;
