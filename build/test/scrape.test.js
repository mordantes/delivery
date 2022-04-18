"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compare_data_1 = require("../utils/compare-data");
const mock_new_1 = require("./mock-new");
const mock_old_1 = require("./mock-old");
// test if changing ANSWER object will lead to update in database
test('Compare old and new Revies\'s objects', () => {
    console.log((0, compare_data_1.Compare)(mock_old_1.dbData, mock_new_1.parsedData));
    expect((0, compare_data_1.Compare)(mock_old_1.dbData, mock_new_1.parsedData)).toStrictEqual([mock_new_1.parsedData[0]]);
});
