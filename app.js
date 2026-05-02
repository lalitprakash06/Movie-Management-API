const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: "Movie Management API is running!",
        endpoints: {
            allMovies: "/movies",
            topRated: "/movies/top-rated"
        }
    });
});

const MONGO_URI = 'mongodb://localhost:27017/movieDB';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));

app.use('/movies', movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});