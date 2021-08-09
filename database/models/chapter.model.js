const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Chapter = require('../database/models/chapter.model.js');

const chapterSchema = schema({
    title: String,
    index: Number,
}, { timestamps: true });

const Chapter = mongoose.model('chapters', chapterSchema);
module.exports = Chapter;