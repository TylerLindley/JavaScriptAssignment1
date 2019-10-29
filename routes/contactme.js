'use strict';
var express = require('express');
var router = express.Router();

/* GET ContactMe page. */
router.get('/', function (req, res) {    

    var info = "Contact Me!";
    if (req.query.name)
        var name = req.query.name;

    res.render('contactme', { person: info });

});

module.exports = router;
