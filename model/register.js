'use strict';

var mysql = require('mysql');
let dbUtil = require("./../util/dbUtil.js");

const user_db = "user";
function registerModel(sqlValuesOptions) {
    // 用户注册
    /* sqlValuesOptions的属性如下：
     *    user : 用户名
     *    password：密码
     *    email：email
     *    birthYear：出生年
     *    birthMonth：出生月
     *    birthDate：出生日
     *    qq：QQ
     *    weixin：微信
     *    sina：新浪
     */
    // 参数初始化默认值
    let userValue = sqlValuesOptions.user ? sqlValuesOptions.user : " ",
        passwordValue = sqlValuesOptions.password ? sqlValuesOptions.password : " ",
        emailValue = sqlValuesOptions.email ? sqlValuesOptions.email : " ",
        birthYearValue = sqlValuesOptions.birthYear ? sqlValuesOptions.birthYear : " ",
        birthMonthValue = sqlValuesOptions.birthMonth ? sqlValuesOptions.birthMonth : " ",
        birthDateValue = sqlValuesOptions.birthDate ? sqlValuesOptions.birthDate : " ",
        qqValue = sqlValuesOptions.qq ? sqlValuesOptions.qq : " ",
        weixinValue = sqlValuesOptions.weixin ? sqlValuesOptions.weixin : " ",
        sinaValue = sqlValuesOptions.sina ? sqlValuesOptions.sina : " ";

    let keyArray = ["user", "password", "email", "birthYear", "birthMonth", "birthDate", "qq", "weixin", "sina"];
    let valueArray = [userValue, passwordValue, emailValue, birthYearValue, birthMonthValue, birthDateValue, qqValue, weixinValue, sinaValue];
    
    let sqlString = 'INSERT INTO ' + user_db + ' (' + keyArray.join(",") + ') VALUES ('+ mysql.escape(valueArray) + ')';

    // 创建数据库连接
    new dbUtil.DBConnection({
        sql: sqlString,
        connectionSuccess: function(err) {
            console.log("数据库连接成功！");
        },
        querySuccess: function(err, rows, fields) {
            for(let i = 0; i < rows.length; i++) {
                console.log("SQL语句执行成功了！");
                console.log(rows[i]);
            }
        },
        endSuccess: function(err) {
            console.log("成功关闭connection!");
        }
    });
}

exports.register = registerModel;