const router = require('express').Router();
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Chapter = require('../database/models/chapter.model.js');


router.get('/users', (req, res) => {

    Chapter.findOne({}).exec().then(doc => res.json(doc));
})

module.exports = router;