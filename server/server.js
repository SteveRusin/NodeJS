const http = require('http');
const port = 8079;
const getFilesHandler = require('./modules/getFilesHandler');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET') {
        switch (req.url) {
            case '/files':
                getFilesHandler(req, res);
                break;
            default:
                res.statusCode = 404;
                res.end('not found');
                break;
        }
    }
});


server.listen(port, err => {
    if (err) { return console.error('ERROR', err) };

    console.log(`server is listening port ${port}`)
})
