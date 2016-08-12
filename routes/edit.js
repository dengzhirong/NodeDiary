'use strict';

let express = require('express');
let router = express.Router();

let editModel = require("./../model/edit.js");
//==================== 路由定义：日记编辑、发布页 ====================
// 日记编辑页
router.get('/', function(req, res, next) {
    res.render('edit', { 
        title: '日记编辑页'
    });
});

router.post('/publish', function(req, res, next) {
// 新用户数据写入数据库
/**
* req.body.user : 用户名
* req.body.content_tech : 技术分享
* req.body.content_normal : 流水账
* req.body.content_important : 每天大事记
* req.body.tag : 标签
* req.body.tech_status : 技术分享状态
* req.body.normal_status : 流水账状态
* req.body.mood : 心情
* req.body.weather : 天气
* req.body.dataTime : 发布日期
* req.body.lastModifyTime : 最后修改时间
*/
  editModel.edit({
      user: req.body.user,
      content_tech: req.body.content_tech,
      content_normal: req.body.content_normal,
      content_important: req.body.content_important,
      tag: req.body.tag,
      tech_status: req.body.tech_status,
      normal_status: req.body.normal_status,
      mood: req.body.mood,
      weather: req.body.weather,
      dataTime: req.body.dateTime,
      lastModifyTime: req.body.lastModifyTime
  });
  console.log(req.body);
  res.send("success");
});

module.exports = router;