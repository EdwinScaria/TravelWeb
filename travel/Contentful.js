const mongoose = require("mongoose");

const ContentfulSchema = new mongoose.Schema();

module.exports = mongoose.model("Contentful", ContentfulSchema);

// mongoDB setup
