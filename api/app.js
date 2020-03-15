
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const moviesController = require('./controllers/moviesController.js');
moviesController.writeFileCongig()

require('./routes/moviesRoutes.js')(app);
require('./routes/categoriesRoutes.js')(app);
require('./routes/userRoutes.js')(app);

var server = app.listen(3000, function () {
    console.log('Server is running..');
});