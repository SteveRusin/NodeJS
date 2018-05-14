const fs = require('fs');
const path = require('path');
const Grid = require('gridfs-stream');
const filesCollection = require('./mongo');
const mongo = require('mongodb');


module.exports = (req, res) => {
    const files = filesCollection();
    const gfs = new Grid(files, mongo);
    const fileId = req.headers['x-fileid'];
    gfs.remove({
        _id: fileId
    }, function (err) {
        if (err) {
            res.statusCode = 404;
            res.end(JSON.stringify(err));
        } else {
            res.statusCode = 204;
            res.end(`File ${fileId} has been deleted`)
        }
    });
}
