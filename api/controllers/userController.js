
config = require('./../config/user.json')

exports.authenticate = (req, res, next) => {
    const { username, password } = req.body
    if (username == config.username && password == config.password) {
        res.send({ message: 'Sucsses!!!' })
    } else {
        res.status(400).send({ message: 'Username or password is incorrect' })
    }
}
