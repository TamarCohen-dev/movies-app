const fs = require("fs");
const configMovies = require('./../config/movies.json')

exports.writeFileCongig = () => {
  fs.writeFile('./data.json', JSON.stringify(configMovies), err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
     }
  })
}

writeFile = (movies) => {
    fs.writeFile('./data.json', JSON.stringify(movies), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}

exports.getAll = (req, res) => {
  try {
    fs.readFile('./data.json', 'utf8', (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err)
        return
      }
      const allMovies = JSON.parse(jsonString)
      res.send({ movies: allMovies })
  })
  } catch (err) {
    res.status(400).send(err)
  }
}

exports.deleteMovie = (req, res) => {
    try {
        fs.readFile('./data.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            const allMovies = JSON.parse(jsonString)
            const newMovies = allMovies.filter(e => e.name != req.params.name)
            writeFile(newMovies)
            console.log('newMovies ------' + JSON.stringify(newMovies))
            res.send({ movies: newMovies })
        })
    } catch (err) {
        res.status(400).send(err)
    }
}

exports.createMovie = (req, res) => {
    try {
        fs.readFile('./data.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            const movie = req.body
            console.log('movie ---------- ' + JSON.stringify(movie))
            const allMovies = JSON.parse(jsonString)
            if (allMovies.filter(m => m.name == movie.name).length > 0) {
                res.status(400).send({ message: `Name "${movie.name}" is already` })
            } else {
                allMovies.push(movie)
                console.log('allMovies ------' + JSON.stringify(allMovies))
                writeFile(allMovies)
                res.send({ movies: allMovies })
            }
        })
    } catch (err) {
        res.status(400).send(err)
    }
}