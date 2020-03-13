const categoriesController = require('../controllers/categoriesController');

module.exports = function (app) {
    app.get('/api/categories', categoriesController.getAll);
}