// index.js

const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

const welcomeMessage = 
    {
        "message": "Welcome to DressStore Application"
    };

/* GET home page. */
router.get('/', (req, res) => {
    res.json(welcomeMessage);
});

router.use('/api', apiRouter);

module.exports = router;
