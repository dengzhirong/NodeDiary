'use strict';

let express = require('express');
let router = express.Router();

//==================== 路由定义：首页 ====================
// 首页
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页'});
});

/*router.post('/home', function(req, res, next) {
  console.log("req: " + req.body.name);
  res.render('index', { title: 'home',we: "world", test: "It's the way for home." });
  // res.send("hello world");
  return;
});
*/
module.exports = router;
