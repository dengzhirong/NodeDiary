'use strict';

let mysql = require('mysql');
let dbUtil = require("./../util/dbUtil.js");

const article_db = "article";
function editModel(sqlValuesOptions, callback) {
    // 写日记
    /* sqlValuesOptions的属性如下：
     *    user : 用户名
     *    content_tech : 技术分享
     *    content_normal : 流水账
     *    content_important : 每天大事记
     *    tag : 标签
     *    tech_status : 技术分享状态
     *    normal_status : 流水账状态
     *    mood : 心情
     *    weather : 天气
     *    dataTime : 发布日期
     *    lastModifyTime : 最后修改时间
     */
    // 参数初始化默认值
    let user_val = sqlValuesOptions.user ? sqlValuesOptions.user : "",
        content_tech_val = sqlValuesOptions.content_tech || "",
        content_normal_val = sqlValuesOptions.content_normal || "",
        content_important_val = sqlValuesOptions.content_important || "",
        tag_val = sqlValuesOptions.tag || "",
        tech_status_val = sqlValuesOptions.tech_status || "",
        normal_status_val = sqlValuesOptions.normal_status || "",
        mood_val = sqlValuesOptions.mood || "",
        weather_val = sqlValuesOptions.weather || "",
        dataTime_val = sqlValuesOptions.dateTime || new Date(),
        lastModifyTime_val = sqlValuesOptions.lastModifyTime || new Date();

    let keyArray = ["user", "content_tech", "content_normal", "content_important", "tag", "tech_status", "normal_status", "mood", "weather", "dateTime", "lastModifyTime"];
    let valueArray = [user_val, content_tech_val, content_normal_val, content_important_val, tag_val, tech_status_val, normal_status_val, mood_val, weather_val, dataTime_val, lastModifyTime_val];
    
    let sqlString = 'INSERT INTO ' + article_db + ' (' + keyArray.join(",") + ') VALUES ('+ mysql.escape(valueArray) + ')';

    console.log(sqlString);

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

exports.edit = editModel;