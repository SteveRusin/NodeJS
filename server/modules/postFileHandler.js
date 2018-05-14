const fs = require('fs');
const path = require('path');
const filesCollection = require('./mongo');
const Grid = require('gridfs-stream');
const mongo = require('mongodb');

module.exports = (req, res) => {
    const files = filesCollection();
    const gfs = new Grid(files, mongo);
    console.log(req.headers['x-filename'])
    const wstream = gfs.createWriteStream({filename: decodeURI(req.headers['x-filename'])})

    req.on('data', chunk=>{
        wstream.write(chunk);
        res.write(chunk);
    })

    req.on('end', () => {
        wstream.end();
        res.end();
    })

/*     var wstream = fs.createWriteStream(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`), {
        flags: 'w'
    });

    req.on('data', (chunk) => {
        wstream.write(chunk);
        res.write(chunk);
    })


    req.on('end', () => {
        wstream.end();
        res.end();
    })

    req.on('error', (err) => {
        res.statusCode = 500;
        wstream.end();
        res.end(JSON.stringify(err));
    })

    res.statusCode = 200; */
}
