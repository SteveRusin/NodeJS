const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // TODO
    
   let body = "";

   req.on('data', (chunk)=>{
       body += chunk;
   })

   req.on('end', ()=>{
       const file = JSON.parse(body);

       fs.appendFile(path.resolve(path.dirname(__dirname), `./${decodeURI(req.url)}/`), body, ()=>{
        res.statusCode = 201;
        res.end();
       })
   })
}
