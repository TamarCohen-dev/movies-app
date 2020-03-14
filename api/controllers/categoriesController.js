const types = ['Action', 'Drama', 'Comedy', 'Other']

exports.getAll = (req, res) => {
    res.send({ typesCategories: types })
}