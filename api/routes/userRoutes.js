const userController = require('../controllers/userController');

module.exports = function (app) {
    app.post('/api/user/authenticate', userController.authenticate);
}