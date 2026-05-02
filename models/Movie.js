const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    director: {
        type: String,
        required: [true, 'Director is required']
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot exceed 10']
    }
});

module.exports = mongoose.model('Movie', movieSchema);