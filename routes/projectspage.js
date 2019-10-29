'use strict';
var express = require('express');
var router = express.Router();

/* GET Projects page. */
router.get('/', function (req, res) {    

    var info = "My Projects!";
    if (req.query.name)
        var name = req.query.name;

    res.render('projectspage', { person: info });

});

module.exports = router;
