const fs = require('fs');
const path = require('path');
const filesCollection = require('./mongo');
const Grid = require('gridfs-stream');
const mongo = require('mongodb');

module.exports = (req, res) => {
    const files = filesCollection();
    const gfs = new Grid(files, mongo);
    const fileId = req.headers['x-fileid'];

    const rstream = gfs.createReadStream({
        _id: fileId
    });



    rstream.pipe(res);
    res.statusCode = 200;
}
