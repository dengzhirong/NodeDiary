'use strict';

let express = require('express');
let router = express.Router();

//==================== 路由定义：日记编辑、发布页 ====================
// 日记编辑页
router.get('/edit', function(req, res, next) {
    res.render('edit', { 
        title: '日记编辑页'
    });
});

// router.post('/home', function(req, res, next) {
//   console.log("req: " + req.body.name);
//   res.render('index', { title: 'home',we: "world", test: "It's the way for home." });
//   // res.send("hello world");
//   return;
// });

module.exports = router;