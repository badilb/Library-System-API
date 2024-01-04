exports.getGenre = async (req, res) => {
    // res.json(authors)
    res.status(200).json(null)
};


exports.addGenre = (req, res) => {
    //const newAuthor = req.body
    res.status(200).json(null)
}

exports.putGenre=(req, res) => {
    const genreId = req.params.id
    const updatedGenre = req.body
    res.status(200).json(null)
}

exports.deleteGenre= (req, res) => {
    const genreId = req.params.id
    res.status(200).json(null)
}
