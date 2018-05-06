const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    const files = fs.readdirSync(path.resolve(path.dirname(__dirname), './files'));
    const response = [];
    for (let file of files) {
        const fileSizeInBytes = (fs.statSync(path.resolve(path.dirname(__dirname), './files', file)).size  / 1000000).toFixed(1);
        response.push({
            name: file,
            size: fileSizeInBytes
        })
    }
    res.statusCode = 200;
    res.end(JSON.stringify(response));
}
