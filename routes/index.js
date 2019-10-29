'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {    

    var info = "Welcome to my services page, I wil talk about all the services I can do for you!";
    if (req.query.name)
        var name = req.query.name;

    res.render('index', { person: info});

});

module.exports = router;
