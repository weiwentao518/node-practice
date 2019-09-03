const os = require('os')
const cpu = require('cpu-stat')

module.exports = function () {
  const mem = os.freemem() / os.totalmem() * 100
  console.log('内存占用率%d %', mem)
  cpu.usagePercent((err, percent) => {
    console.log('CPU占用率%d %', percent)
  })
}
