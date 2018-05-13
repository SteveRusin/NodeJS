module.exports = () => {
const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://SteveNeeson:coolpassword1@ds119070.mlab.com:19070/dbformentoring", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
}
