
config = require('./../config/user.json')

function authenticate({ username, password }) {
    console.log('username' + username + 'password' + password)
    console.log('cusername' + config.username + 'cpassword' + config.password)
    if (username == config.username && password == config.password) {
        return { message: 'Sucsses!!!' }
    } else {
        return { message: 'Username or password is incorrect' }
    }
}
exports.authenticate = (req, res, next) => {
    const { username, password } = req.body
    if (username == config.username && password == config.password) {
        res.send({ message: 'Sucsses!!!' })
    } else {
        res.status(400).send({ message: 'Username or password is incorrect' })
    }
}
