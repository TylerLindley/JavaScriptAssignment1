'use strict';
var express = require('express');
var router = express.Router();

/* GET AboutMe page. */
router.get('/', function (req, res) {    

    var info = "About Tyler!";
    if (req.query.name)
        var name = req.query.name;

    res.render('aboutme', { person: info });

});

module.exports = router;
