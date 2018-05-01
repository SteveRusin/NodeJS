const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");

module.exports = (req, res) => {
    res.statusCode = 200;
    res.end('ok');
/*     fs.unlink(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`), err => {
        if (err) {
            res.statusCode = 404;
            res.end('Error');
        } else {
            res.statusCode = 204;
            res.end(`File ${req.url} has been deleted`)
        }
    })

    fs.appendFile() */
}
