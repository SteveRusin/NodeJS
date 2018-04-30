const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    fs.readdir(path.resolve(path.dirname(__dirname), './files'), (err, files) => {
        if(err || !files){
            res.statusCode = 404;
            res.end('[]');
        }else{
            res.statusCode = 200;
            res.end(JSON.stringify(files));
        }

    })
}
