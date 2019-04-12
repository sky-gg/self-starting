let schedule = require('node-schedule');
let cp = require('child_process')
let fs = require('fs');
const scheduleCronstyle = () => {
  //每天的十一点五十执行一次:
  schedule.scheduleJob('00 50 11 * * *', () => {/** 秒 分 时 */
    initApp("该去吃饭了");
  });
  //每天的六点执行一次:
  schedule.scheduleJob('00 00 18 * * *', () => {/** 秒 分 时 */
    initApp("发周报");
  });
}
scheduleCronstyle();

function initApp(sweetTip) {
  cp.exec('msg %username% ' + sweetTip,(err)=>{
    if (err) {
      fs.writeFileSync('error.log', err.toString())
    }
  })
}

