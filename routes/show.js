'use strict';

let express = require('express');
let router = express.Router();

//==================== 路由定义：日记展示页 ====================
// 日记展示页 
router.get('/', function(req, res, next) {
    res.render('show', { 
        title: '日记展示页 '
    });
});

router.get('/detail', function(req, res, next) {
    res.render('show', { 
        title: '日记详情页'
    });
});


// router.post('/home', function(req, res, next) {
//   console.log("req: " + req.body.name);
//   res.render('index', { title: 'home',we: "world", test: "It's the way for home." });
//   // res.send("hello world");
//   return;
// });

module.exports = router;