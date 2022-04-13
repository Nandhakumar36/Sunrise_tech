const mongoose  = require('mongoose')


const  schema = new mongoose.Schema({
    imageTitle:{
        type: String,
    },
    createdAt : { type : Date, default: Date.now },
})

module.exports = mongoose.model("images", schema)