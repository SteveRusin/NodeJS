const fs = require('fs');
const path = require('path');


module.exports = (req, res) => {
    const filePath = path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}`)
    const rStream = fs.createReadStream(filePath);
    fs.stat(filePath, (err, stat)=> {
        if (err) { 
            res.end(JSON.stringify(err));
         }
        res.writeHead(200, {
          'Content-Length' : stat.size
        });

        rStream.pipe(res);

      }); 

  rStream.on('error', (err)=>{
      res.end(JSON.stringify(err));
  })

  res.statusCode = 200;
}
