const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true
    },
    date: { 
        type: Date,
        default: Date.now,
        required: true,
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;