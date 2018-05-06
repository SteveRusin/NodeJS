const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`);
    const stat = fs.statSync(filePath);
    const extension = path.extname(filePath).replace('.', '');
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ?
            parseInt(parts[1], 10) :
            fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, {
            start,
            end
        });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': `video/${extension}`,
        }
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': `video/${extension}`,
        }
        res.writeHead(200, head)
        fs.createReadStream(filePath).pipe(res)
    }
}
