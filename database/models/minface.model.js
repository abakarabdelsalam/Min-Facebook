const mongoose = require('mongoose');
const schema = mongoose.Schema;

const minifaceSchema = schema({
    content: {
        type: String,
        maxlength: 140,
        minlength: 1,
        required: true
    }
});

const miniface = mongoose.model('miniface', minifaceSchema);

module.exports = miniface;