const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    var wstream = fs.createWriteStream(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`), {
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

    req.on('error', () => {
        res.statusCode = 500;
        wstream.end();
        res.end();
    })

    res.statusCode = 200;
}
