"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceURI = void 0;
const api_url_1 = require("./api-url");
const configstore_1 = require("./configstore");
const split_chunks_1 = require("./split-chunks");
// create an array of URL that needs to collect
const reduceURI = (total) => {
    try {
        const uri = [];
        const chunks = (0, split_chunks_1.SplitChunks)(total - 10);
        for (let i = 0; i < chunks; i++) {
            const amount = parseInt((0, configstore_1.Configstore)('CHUNK'));
            const currentURI = (0, api_url_1.generateURl)({ limit: amount, offset: (i * amount) + 10 });
            uri.push(currentURI);
        }
        return uri;
    }
    catch (e) {
        throw e;
    }
};
exports.reduceURI = reduceURI;
