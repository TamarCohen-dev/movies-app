const moviesController = require('../controllers/moviesController');

module.exports = function (app) {
    app.get('/api/movies', moviesController.getAll);
    app.delete('/api/movie/:name', moviesController.deleteMovie);
    app.post('/api/movie', moviesController.createMovie);
}