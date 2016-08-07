// 数据库操作中的增删查改
"use strict";

let mysql  = require('mysql'); // 调用MySQL模块
let dbConfig = require("./../config/db.config"); // 数据库配置信息

/**
 * [dbConnection description]
 * @param  {[options]} options [配置选项]
            sql: {[string]} SQL语句
            connectionSuccess(err): 连接成功时的回调函数
            querySuccess(err, rows, fields): 成功执行SQL时的回调函数
            endSuccess(err): 成功关闭connection时的回调函数
 * @return {[type]}         [description]
 */
/**
 * 使用例子：
   new dbUtil.DBConnection({
     sql: "select * from user limit 10",
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
 */
function DBConnection (options) {
    let sql = options.sql ? options.sql : null,
        connectionSuccess = options.connectionSuccess ? options.connectionSuccess : null,
        querySuccess = options.querySuccess ? options.querySuccess : null,
        endSuccess = options.endSuccess ? options.endSuccess : null;

    //创建一个connection
    var connection = mysql.createConnection(dbConfig);
    // 建立连接
    connection.connect(function(err){
        if(err){
            console.log('[query] - :' + err);
            return;
        }
        // 连接成功时的回调函数
        if(typeof connectionSuccess == "function") {
            connectionSuccess(err);
        }
        console.log('[connection connect]  succeed!');
    });

    //执行SQL语句
    connection.query(sql, function(err, rows, fields) { 
        if (err) {
           console.log('[query] - :' + err);
          return;
        }
        // 成功执行SQL时的回调函数
        if(typeof querySuccess == "function") {
            querySuccess(err, rows, fields);
        }
    });

    //关闭connection
    connection.end(function(err){
        if(err){
          return;
        }
        // 成功关闭connection时的回调函数
        if(typeof endSuccess == "function") {
            endSuccess(err);
        }
        console.log('[connection end] succeed!');
    });
}

exports.DBConnection = DBConnection;