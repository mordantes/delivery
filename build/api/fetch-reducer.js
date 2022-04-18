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
exports.fetchReducer = void 0;
const fetch_data_1 = require("../utils/fetch-data");
const fetchReducer = (uri) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const total = [];
        for (const target of uri) {
            const currentData = yield (0, fetch_data_1.fetchData)(target);
            total.push(...currentData.reviews);
        }
        return total;
    }
    catch (e) {
        throw e;
    }
});
exports.fetchReducer = fetchReducer;
