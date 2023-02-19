const mongoose = require('mongoose');

const schema = mongoose.Schema;

const nameSchema = new schema({
    userName: String,
    password: String,
});

const Data = mongoose.model('NameModel', nameSchema);

module.exports = Data;