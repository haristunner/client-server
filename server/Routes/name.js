const express = require('express');
const router = express.Router();
const NameModel = require('../Models/nameModel');

// require('../Models/nameModel');

router.post('/name', async (req, res) => {
    try {
        const data = new NameModel(req.body);
        await data.save();
        res.status(201).send(data);
        console.log(data);
    }
    catch (err) {
        res.status(401).json({ message: "error" })
    }

})

module.exports = router;
