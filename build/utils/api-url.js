"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateURl = void 0;
const configstore_1 = require("./configstore");
// construct true URL with parameters to get data from API
const generateURl = ({ limit, offset }) => {
    try {
        const mainURI = new URL((0, configstore_1.Configstore)('API_URL'));
        mainURI.searchParams.append('chainId', '48274');
        mainURI.searchParams.append('limit', limit.toString());
        mainURI.searchParams.append('offset', offset.toString());
        return mainURI.toString();
    }
    catch (e) {
        throw e;
    }
};
exports.generateURl = generateURl;
