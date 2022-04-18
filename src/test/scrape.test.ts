import { Compare } from "../utils/compare-data"
import { parsedData } from "./mock-new"
import { dbData } from "./mock-old"


// test if changing ANSWER object will lead to update in database
test('Compare old and new Revies\'s objects', () => {
	console.log(Compare(dbData, parsedData))
	expect(Compare(dbData, parsedData)).toStrictEqual([parsedData[0]])
})