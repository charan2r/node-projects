const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("Post", postSchema);
