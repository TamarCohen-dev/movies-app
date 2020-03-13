const types = ['Action', 'Drama', 'Comedy', 'Other']
config = require('./../config/categories.json')

exports.getAll = (req, res) => {
    res.send({ typesCategories: types })
}