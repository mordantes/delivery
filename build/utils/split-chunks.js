"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitChunks = void 0;
const configstore_1 = require("./configstore");
// optionaly function
// in order im try to collect data with for cycle with chunks
// and separatly and async'ly requesting to API 
// bad variant
const SplitChunks = (totalSize) => {
    const chunkSize = (0, configstore_1.Configstore)('CHUNK');
    const size = Div(totalSize, parseInt(chunkSize));
    return size;
};
exports.SplitChunks = SplitChunks;
const Div = (target, sub) => ((target - (target % sub)) / sub) + 1;
