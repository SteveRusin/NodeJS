const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    fs.unlink(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`), err => {
        if (err) {
            res.statusCode = 404;
            res.end('Error');
        } else {
            res.statusCode = 204;
            res.end(`File ${req.url} has been deleted`)
        }
    })

}
