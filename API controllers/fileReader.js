const fileReaderService=require('../services/fileReader')

exports.getFile = async (req, res) => {
    res.status(200).json(
        fileReaderService.getFile()
    )
};

