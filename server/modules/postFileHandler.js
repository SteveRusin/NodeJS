const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    if (req.headers['content-type'].includes('text/plain')) {


        const data = [];

        req.on('data', (chunk) => {
            data.push(chunk)
        })

        req.on('end', () => {
            fs.writeFile(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`), data, () => {
                res.statusCode = 201;
                res.end();
            })
        })


    } else {
        res.statusCode = 415;
        res.end();
    }
}
