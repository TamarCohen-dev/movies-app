var fs = require("fs");

saveMovies = (movies) => {
    console.log(`${movies}`);
    fs.appendFile('data.txt', movies, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

deleteMovie = (movieId) => {
    fs.readFile('data.txt', 'utf8', function (err, data) {
        if (err) {
            res.status(404).send();
            logger.error("Could not open file, reason: " + err, { req: req, res: res });
        } else {
            console.log('readFile' + JSON.stringify(data));
            const newData = data.find(d => d.id !== movieId);
            fs.writeFile("data.txt", newData, (err) => {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
            });
        }
    });
}

addMovie = (movie) => {
    fs.writeFile("data.txt", movie, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}

module.exports = { saveMovies, deleteMovie, addMovie }