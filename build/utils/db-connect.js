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
exports.initDbConnection = void 0;
const configstore_1 = require("../utils/configstore");
const mongoose_1 = require("mongoose");
const uri = `mongodb+srv://${(0, configstore_1.Configstore)('MONGO_USER')}:${(0, configstore_1.Configstore)('MONGO_PWD')}@cluster0.fitvd.mongodb.net/${(0, configstore_1.Configstore)('MONGO_DB')}?retryWrites=true&w=majority`;
// connect to mongoDB
function initDbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)(uri, { autoCreate: true });
        }
        catch (e) {
            throw e;
        }
    });
}
exports.initDbConnection = initDbConnection;
