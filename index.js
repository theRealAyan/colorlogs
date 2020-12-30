const c = require('colorette')

function getTime(){
  date = new Date()

    h = date.getHours()
    m = date.getMinutes()
    s = date.getSeconds()
    ms = date.getMilliseconds()

  return `${h}:${m}:${s}:${ms}`

}
module.exports = {
  log: (text) => {
    return console.log(`${c.gray(getTime())} - ${c.blueBright('info') }    - ${text}`)
  },
  success: (text) => {
    return console.log(`${c.gray(getTime())} - ${c.greenBright('success') } - ${text}`)
  },
  error: (text) => {
    return console.log(`${c.gray(getTime())} - ${c.redBright('error') }   - ${text}`)
  },
  warn: (text) => {
    return console.log(`${c.gray(getTime())} - ${c.yellowBright('warn') }    - ${text}`)
  }
}