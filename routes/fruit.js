const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{               // actual route is : /fruit/
  res.send("This is router");
  console.log("toter")
});

router.get('/fresh',(req,res) =>{          // actual route is : /fruit/fresh/
  res.send("These are fresh fruits");
});


module.exports = router;