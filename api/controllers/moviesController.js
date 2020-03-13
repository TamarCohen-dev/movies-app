configMovies = require('./../config/movies.json')
const service = require('./../service');

exports.getAll = (req, res) => {
    service.saveMovies(configMovies);
    res.send({ movies: configMovies })
}

exports.deleteMovie = (req, res) => {
    service.deleteMovie(req.body);
    res.send(req.body)
}

exports.addMovie = (req, res) => {
    service.addMovie(req.body);
    res.send(req.body)
}