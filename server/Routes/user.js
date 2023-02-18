const express = require('express');
const router = express.Router();

router.get('/message', (req, res) => {
    res.send({ message: "hello bruhh" });
})

module.exports = router;