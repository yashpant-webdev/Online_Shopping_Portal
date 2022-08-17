const mongoose = require('mongoose');

const {Schema} = mongoose;

const cartSchema = new Schema({
  customerId:String,
  productId:String,
  count:Number
})

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;