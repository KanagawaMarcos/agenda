let mongoose = require('mongoose');
let db;

module.exports = ()=>{
    if(!db){
        db = mongoose.createConnection('mongodb://localhost/agenda');
    }
    return db;
} 