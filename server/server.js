const http = require('http');
const port = 8079;
const getFileHandler = require('./modules/getFileHandler');
const getFilesHandler = require('./modules/getFilesHandler');
const postFileHandler = require('./modules/postFileHandler');
const deleteFileHandler = require('./modules/deleteFileHandler');
const playVideoHandler = require('./modules/playVideoHandler');

// connect to db;
require('./modules/mongo')();

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-filename');


    if (req.method === 'GET') {

        if (req.url === '/files') {
            getFilesHandler(req, res);
        }else if(req.url.includes('/files') && req.headers.range){
            playVideoHandler(req, res);
        } else if (req.url.includes('/files')) {
            getFileHandler(req, res);
        }

    } else if (req.method === 'POST') {

        if (req.url.includes('/files')) {
            postFileHandler(req, res);
        }

    } else if (req.method === 'DELETE') {

        if (req.url.includes('/files')) {
            deleteFileHandler(req, res);
        }
        
    } else if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.end('OK')
    } else {
        res.statusCode = 405;
        res.end('Method not allowed');
    }
});


server.listen(port, err => {
    if (err) {
        return console.error('ERROR', err)
    };

     console.log(`server is listening port ${port}`)
})


