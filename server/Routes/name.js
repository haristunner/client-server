const express = require('express');
const router = express.Router();
const NameModel = require('../Models/nameModel');

// require('../Models/nameModel');

router.post('/name',(req, res) => {
    const data =new NameModel(req.body);
    data.save()
    .then(()=>console.log("saved"))
    .catch((err)=>console.error(err))
})

module.exports = router;
