module.exports = ()=>{
    let db = require('./../libs/connect_db')();

    let Schema = require('mongoose').Schema;
    
    let contact = Schema({
        name: String,
        phone: String,
        email: String
    });
    return db.model('contacts', contact);
}