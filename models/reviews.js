const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating cannot exceed 5"],
        required: true
    },

    comment: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Review", reviewSchema);
