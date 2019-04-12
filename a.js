let path = require('path');
let cp = require('child_process')
let schedule = require('node-schedule');
let fs = require('fs');
const scheduleCronstyle = () => {
  //每天的十一点五十执行一次:
  schedule.scheduleJob('45 54 13 * * *', () => {/** 秒 分 时 */
    initApp();
  });
}

scheduleCronstyle();
function initApp(sweetTip) {
  let vbsPath = path.join(__dirname, 'c.vbs')
  cp.exec('cscript.exe ' + vbsPath + ' "温馨提示" "该去吃饭了"', function(err, stdout, stderr) {
    if (err) {
      fs.writeFileSync('log.log', err.toString())
    }
  })
}

