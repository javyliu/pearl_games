function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * @param  {time: number}
 * @param  {min_second: boolean}
 * @return {string}
 */
function formatShortTime(time,min_second) {
  // if (typeof time !== 'number' || time < 0) {
  //   return time
  // }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  if(!min_second){
    time = Math.round(time)
  }
  var second = time

  return ([hour, minute, second]).map(function (n) {
    formatNumber(n)
  }).join(':')
}


module.exports = {
  formatTime: formatTime,
  formatTimeStr: formatShortTime
}
