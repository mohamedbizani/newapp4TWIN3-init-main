var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Batiment = new Schema({
    nom : String,
    nbr_niveau : Number,
    description  : String,
    adresse : String
})
module.exports = mongoose.model('batiments', Batiment)