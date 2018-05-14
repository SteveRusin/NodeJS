const fs = require('fs');
const path = require('path');
const filesCollection = require('./mongo');

module.exports = async (req, res) => {
    const files = await filesCollection().collection('fs.files').find().toArray();
     if(files){
        res.statusCode = 200;
        res.end(JSON.stringify(files));
    }else {
        res.statusCode = 404;
        res.end()
    }

}
