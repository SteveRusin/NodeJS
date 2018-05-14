const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://SteveNeeson:coolpassword1@ds119070.mlab.com:19070/dbformentoring";
let filesCollection;

module.exports = () => {
    if(filesCollection){
        return filesCollection;
    }else {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if(!err){
                console.log('connected')
            }
            filesCollection = client.db('dbformentoring').collection('files');
        });
    }
}
