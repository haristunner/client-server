const { json } = require('express');
const express = require('express');
const router = express.Router();

router.post('/name', (req, res) => {
    const data = req.body
    console.log(data);
    res.send('data received successfully');
})

module.exports = router
