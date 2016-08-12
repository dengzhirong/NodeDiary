'use strict';

var mysql = require('mysql');
let dbUtil = require("./../util/dbUtil.js");

const user_db = "user";
function loginModel(sqlValuesOptions, callback) {
    // 用户登录
    /* sqlValuesOptions的属性如下：
     *    user : 用户名
     *    password：密码
     */
    // 参数初始化默认值
    let userValue = sqlValuesOptions.user ? sqlValuesOptions.user : " ",
        passwordValue = sqlValuesOptions.password ? sqlValuesOptions.password : " ";

    let keyArray = ["user", "password"];

    let sqlString = 'SELECT ' + keyArray.join(",") + ' FROM ' + user_db + ' WHERE ' + 'user=' + mysql.escape(userValue) + 'AND password=' + mysql.escape(passwordValue);

    // 创建数据库连接
    new dbUtil.DBConnection({
        sql: sqlString,
        connectionSuccess: function(err) {
            console.log("数据库连接成功！");
        },
        querySuccess: function(err, rows, fields) {
            if(typeof callback == "function") {
                callback(err, rows, fields);
            }
        },
        endSuccess: function(err) {
            console.log("成功关闭connection!");
        }
    });
}

exports.login = loginModel;