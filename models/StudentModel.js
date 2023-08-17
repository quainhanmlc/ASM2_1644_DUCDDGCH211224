var mongoose = require("mongoose");

var ToySchema = mongoose.Schema({
    name: String,
    dateOfManufacture: Date,
    types: Number,
    image: String,
    video: String,
 });
 
 const ToyModel = mongoose.model('Toy', ToySchema, 'Toy');
 module.exports = ToyModel;