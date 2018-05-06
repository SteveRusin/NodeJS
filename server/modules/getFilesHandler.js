const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    const files = fs.readdirSync(path.resolve(path.dirname(__dirname), './files'));
    const response = [];
    for (let file of files) {
        const filePath = path.resolve(path.dirname(__dirname), './files', file);
        const extension = path.extname(filePath);
        const size = (fs.statSync(filePath).size  / 1000000).toFixed(1);
        response.push({
            name: file,
            size,
            extension
        })
    }
    res.statusCode = 200;
    res.end(JSON.stringify(response));
}
