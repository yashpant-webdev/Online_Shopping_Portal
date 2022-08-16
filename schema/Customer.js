const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({
  username:String,
  email:String,
  contact:Number,
  // productsOrder: [
  //    {
  //       productId:String,
  //       productName:String,
  //       productDescription:String,
  //    }
  // ],
  productsOrder: String,
  // orders:[
  //    {
  //       orderId:String,
  //       orderName:String,
  //       orderDescription:String
  //    }
  // ],
  address:String,
});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;
