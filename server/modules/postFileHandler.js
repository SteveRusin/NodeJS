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


    } else if (req.headers['content-type'].includes('audio/')) {

        var wstream = fs.createWriteStream(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`), {flags: 'w'});

        req.on('data', (chunk) => {
            wstream.write(chunk);
            res.write(chunk);
        })


        req.on('end', ()=>{
            wstream.end();
            res.end();
            
        })

        req.on('error', ()=>{
            res.statusCode = 500;
            wstream.end();
            res.end();
        })

        res.statusCode = 200;
    } else {
        res.statusCode = 415;
        res.end('Media Not Supported');
    }
}
