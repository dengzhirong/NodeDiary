'use strict';

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let app = express();

//==================== html模板引擎设置 ====================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//==================== 路由定义 ====================
let index = require('./routes/index.js');  // 首页
let edit = require('./routes/edit.js');  // 日记编辑/发布页
let login = require('./routes/login.js');  // 用户登录页
let register = require('./routes/register.js');  // 用户注册页
let show = require('./routes/show.js');  // 日记展示页
let statistic = require('./routes/statistic.js');  // 日记统计页
let todolist = require('./routes/todolist.js');  // to do list页

//==================== 站点设置 ====================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//==================== 路由注册 ====================
app.use('/', index);  // 首页
app.use('/edit', edit);  // 日记编辑/发布页
app.use('/login', login);  // 用户登录页
app.use('/register', register);  // 用户注册页
app.use('/show', show);  // 日记展示页
app.use('/statistic', statistic);  // 日记统计页
app.use('/todolist', todolist);  // to do list页

//==================== 404页面 ====================
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//==================== 开发环境错误处理 ====================
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//==================== 生产环境错误处理 ====================
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;