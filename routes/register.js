'use strict';

let express = require('express');
let router = express.Router();

let registerModel = require("./../model/register.js");

//==================== 路由定义：用户注册页面 ====================
// 用户注册页面 
router.get('/', function(req, res, next) {
    res.render('register', { 
        title: '用户注册页面 '
    });
});

// 用户注册验证
router.post('/check', function(req, res, next) {
    // 新用户数据写入数据库
    /**
     * req.body.user : 用户名
     * req.body.password：密码
     * req.body.email：email
     * req.body.birthYear：出生年
     * req.body.birthMonth：出生月
     * req.body.birthDate：出生日
     * req.body.qq：QQ
     * req.body.weixin：微信
     * req.body.sina：新浪
     */
    registerModel.register({
        user: req.body.user,
        password: req.body.password,
        email: req.body.email,
        birthYear: req.body.birthYear,
        birthMonth: req.body.birthMonth,
        birthDate: req.body.birthDate,
        qq: req.body.qq,
        weixin: req.body.weixin,
        sina: req.body.sina
    });
    console.log(req.body);
    res.send("success");
});
// router.post('/home', function(req, res, next) {
//   console.log("req: " + req.body.name);
//   res.render('index', { title: 'home',we: "world", test: "It's the way for home." });
//   // res.send("hello world");
//   return;
// });

module.exports = router;