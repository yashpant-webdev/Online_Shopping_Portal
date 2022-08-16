const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
  res.send("This is router");
  console.log("toter")
});

router.get('/fresh',(req,res) =>{
  res.send("These are fresh fruits");
});


module.exports = router;