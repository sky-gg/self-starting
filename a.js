let path = require('path');
let cp = require('child_process')
let schedule = require('node-schedule');
const scheduleCronstyle = () => {
  //每天的十一点五十执行一次:
  schedule.scheduleJob('00 50 11 * * *', () => {/** 秒 分 时 */
    initApp("该去吃饭了");
  });
}

scheduleCronstyle();
function initApp(sweetTip) {
  let vbsPath = path.join(__dirname, 'c.vbs')
   cp.exec('cscript.exe ' + vbsPath + "温馨提示" + sweetTip , function(err, stdout, stderr) {
    if (err) {
      fs.writeFileSync('log.log', err.toString())
    }
  })
}

