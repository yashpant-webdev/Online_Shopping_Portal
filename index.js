require('dotenv').config();
// import Fruit from './schema/Fruit.js';   // Fruit Model import kiya hain idhar

const Fruit = require('./schema/Fruit.js');
const Seller = require('./schema/Seller.js');
const Customer = require('./schema/Customer.js');
const mongoose = require('mongoose');
const express = require('express');
const fruit = require('./routes/fruit.js');
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

app.listen(3002, function() {
  console.log(`Server running at http://localhost:3000`);
});