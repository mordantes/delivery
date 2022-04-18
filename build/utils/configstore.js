"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configstore = void 0;
require('dotenv').config();
// used to get props from ENV file
// if needed file name is provide by >config< variables
const Configstore = (val) => {
    try {
        return process.env[val];
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.Configstore = Configstore;
