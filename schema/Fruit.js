// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const { Schema } = mongoose;

// fruitSchema banaya hain 
const fruitSchema = new Schema({
   color:String,
   count:Number
});


const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
// export default Fruit;