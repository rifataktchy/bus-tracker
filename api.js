
const express = require('express');
const router = express.Router();


router.get('/buses', (req, res) => {
   
    res.json({ message: 'Search for nearby buses' });
});

module.exports = router;
