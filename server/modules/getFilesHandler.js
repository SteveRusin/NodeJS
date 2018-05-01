const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    fs.readdir(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`), (err, files) => {
        res.statusCode = 200;
        res.end(JSON.stringify(files));
    })
}
