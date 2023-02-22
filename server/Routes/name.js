const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const NameModel = require('../Models/nameModel');

// require('../Models/nameModel');

router.post('/name',(req, res) => {
    const data =new NameModel(req.body);
    data.save()
    .then(()=>res.send("data saved"))
    .catch((err)=>console.error(err))
})

router.post('/login',async(req,res)=>{
   try{
    const name =req.body.uname;
    const password=req.body.pass;
    const user =await NameModel.findOne({password:password,userName:name})
    if(!user){
        console.log("nooo");
    }
    //console.log(user);
   }
   catch(err){
    console.log(err);
   }
})


module.exports = router;
