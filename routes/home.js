'use strict';
var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function (req, res) {    

    var info = "Home";
    if (req.query.name)
        var name = req.query.name;

    res.render('home', { person: info });

});

module.exports = router;
