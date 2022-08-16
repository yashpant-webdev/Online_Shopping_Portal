const mongoose = require('mongoose');

const { Schema } = mongoose;

const sellerSchema = new Schema({
  username:String,
  email:String,
  contact:Number,
  // products: [
  //    {
  //       productId:String,
  //       productName:String,
  //       productDescription:String,
  //    }
  // ]
  products: String,
});

const Seller = mongoose.model('Seller',sellerSchema);

module.exports = Seller;
