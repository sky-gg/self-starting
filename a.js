let request = require('request');
let path = require('path');
let cp = require('child_process')

let date = new Date()
let dateFormat = date.getFullYear() + (date.getMonth() + 1) + date.getDate()
let options = {
    method: 'get',
    url: 'https://api.goseek.cn/Tools/holiday?date=' + dateFormat,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
};

request(options, function (err, res, body) {
    if (err) {
        console.log(err)
    } else {
        body.code ? '' : initApp()
    }
})

let initApp = function () {
    let vbsPath = path.join(__dirname, 'c.vbs')
    cp.exec('cscript.exe ' + vbsPath + ' "温馨提示" "上班打卡"', function (err, stdout, stderr) {
        if (err) {
            fs.writeFileSync('log.log', err.toString())
        }
    })
}
