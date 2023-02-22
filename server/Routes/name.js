const express = require('express');
const router = express.Router();
const NameModel = require('../Models/nameModel');

// require('../Models/nameModel');

router.post('/name',(req, res) => {
    const data =new NameModel(req.body);
    data.save()
    .then(()=>res.send("data saved"))
    .catch((err)=>console.error(err))
})

router.post('/login',(req,res)=>{
    const {name,password}=req.body;
    const user= NameModel.findOne({name,password})
    if(user){
        console.log("nicee");
        res.send("ok")
    }
    else{
        console.log("nooo");
    }
})


module.exports = router;
