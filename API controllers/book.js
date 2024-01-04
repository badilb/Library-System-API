exports.getBook = async (req, res) => {
    // res.json(authors)
    res.status(200).json(null)
};


exports.addBook = (req, res) => {
    //const newAuthor = req.body
    res.status(200).json(null)
}

exports.putBook=(req, res) => {
    const bookId = req.params.id
    const updatedBook = req.body
    res.status(200).json(null)
}

exports.deleteBook= (req, res) => {
    const bookId = req.params.id
    res.status(200).json(null)
}
