'use strict';

let express = require('express');
let router = express.Router();

//==================== 路由定义：日记统计页 ====================
// 日记统计页 
router.get('/', function(req, res, next) {
    res.render('statistic', { 
        title: '日记统计页 '
    });
});

// router.post('/home', function(req, res, next) {
//   console.log("req: " + req.body.name);
//   res.render('index', { title: 'home',we: "world", test: "It's the way for home." });
//   // res.send("hello world");
//   return;
// });

module.exports = router;