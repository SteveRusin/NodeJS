const fs = require('fs');
const path = require('path');
const filesCollection = require('./mongo');
const Grid = require('gridfs-stream');
const mongo = require('mongodb');

module.exports = (req, res) => {
    const files = filesCollection();
    const gfs = new Grid(files, mongo);
    const wstream = gfs.createWriteStream({
        filename: decodeURI(req.headers['x-filename']),
        mode: 'w',
        content_type: req.headers['x-filetype']
    })

    req.on('data', chunk=>{
        wstream.write(chunk);
        res.write(chunk);
    })

    req.on('end', () => {
        wstream.end();
        res.statusCode = 200;
        res.end();
    })
}
