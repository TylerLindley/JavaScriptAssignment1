'use strict';
var express = require('express');
var router = express.Router();

/* GET Serivces page. */
router.get('/', function (req, res) {    

    var info = "Services";
    if (req.query.name)
        var name = req.query.name;


    res.render('services', { person: info});

});

module.exports = router;
