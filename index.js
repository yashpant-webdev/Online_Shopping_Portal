require('dotenv').config();
// import Fruit from './schema/Fruit.js';   // Fruit Model import kiya hain idhar

const Fruit = require('./schema/Fruit.js');
const Customer = require('./schema/Customer.js');
const mongoose = require('mongoose');
const express = require('express');
const fruit = require('./routes/fruit.js');
//
//
const Cart = require('./schema/Cart.js');
const Products = require('./schema/Products.js');
const Seller = require('./schema/Seller.js');
const User = require('./schema/User.js');

// const expresss = require('express');

const app = express();

// try catch mein rakhna hain connect ko 
try{
mongoose.connect(process.env.DB_CONNECTION);
// console.log(process.env.DB_CONNECTION);
}
catch(e){
  console.log("ERROR");
}

app.use('/fruit',fruit);

app.get('/',(req,res)=>{
  res.send("helloworld");
  console.log("hello world")
});

// const apple = new Fruit({color: 'Red',count:4});
// apple.save().then(() => console.log("APPLE is red"));

// const brijesh = new Seller({
//   username:'brijesh',
//   email:'brijesh@gmail.com',
//   contact:1234,
//   products:'Sugar'
// });
// brijesh.save();

// const rajesh = new Customer({
//   username:'rajesh',
//   email:'rajesh@gmail.com',
//   contact:1234,
//   productsOrder:'Lemon',
//   address:'Lavanya'
// });
// rajesh.save().then(() => console.log("rajesh is red")).catch(error => console.log(error));

///   Sample Inputs for DB
// Enteries for User
const manoj = new User({
  username:'Manoj',
  email:'Manoj@gmail.com',
  password:'M@noj123',
  type:'Customer'
});
manoj.save();

// Enteries for Products
const shoes = new Products({
  productId:'12345',
  name:'Nike',
  description:'Shoes of Nike Brand',
  price:10000
 });
 shoes.save();

// Enteries for Cart
const cart = new Cart({
  customerId:'M1',
  productId:'12345',
  count:1
});
cart.save();

// Enteries for Seller
const yash = new Seller({
  sellerId:'10',
  productId:'12345'
});
yash.save();

app.listen(3002, function() {
  console.log(`Server running at http://localhost:3000`);
});