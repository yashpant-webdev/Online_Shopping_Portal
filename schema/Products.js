const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema({
  productId:String,
  name:String,
  description:String,
  price:Number
});

const Products = mongoose.model('Product',productSchema);

module.exports = Products;