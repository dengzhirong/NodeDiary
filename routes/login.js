'use strict';

let express = require('express');
let router = express.Router();

let loginModel = require("./../model/login.js");
//==================== 路由定义：用户登录页 ====================
// 用户登录页
router.get('/', function(req, res, next) {
    res.render('login', { 
        title: '用户登录页'
    });
});

router.post('/check', function(req, res, next) {
  // 新用户数据写入数据库
  /**
   * req.body.user : 用户名
   * req.body.password：密码
   */
    loginModel.login({
        user: req.body.user,
        password: req.body.password
        }, function(err, rows, fields) {
        for(let i = 0; i < rows.length; i++) {
            console.log("SQL语句执行成功了！");
            console.log(rows[i]);
            res.send(rows[i].user + "\n");
        }
      });
  console.log(req.body);
  return;
});

module.exports = router;