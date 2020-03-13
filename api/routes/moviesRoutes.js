const moviesController = require('../controllers/moviesController');

module.exports = function (app) {
    app.get('/api/movies', moviesController.getAll);
    app.delete('/api/movies/:id', moviesController.deleteMovie);
    app.post('/api/movies/:id', moviesController.addMovie);
}