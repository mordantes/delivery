import { Schema, model } from "mongoose"

const ReviewSchema = new Schema({
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
})

const Reviews = model("reviews", ReviewSchema)
export { Reviews, ReviewSchema }
