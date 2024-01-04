exports.getAll = async (req, res) => {
    // res.json(authors)
    res.status(200).json(null)
};


exports.addUser = (req, res) => {
    //const newAuthor = req.body
    res.status(200).json(null)
}

exports.putUser=(req, res) => {
    const authorId = req.params.id
    const updatedAuthor = req.body
    res.status(200).json(null)
}

exports.deleteUser= (req, res) => {
    const authorId = req.params.id
    res.status(200).json(null)
}
