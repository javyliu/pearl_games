//app.js
const base_url = "http://192.168.0.252:7123/api/v1"
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              console.log("getUserInfo:",res)
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  fetchApi(action,data,method = "GET",need_api_header = true) {
    return new Promise((resolve,reject) => {
      let obj = {
        url: `${base_url}${action}`,
        method: method,
        data: data,
        success: resolve,
        fail: reject
      }
      if (need_api_header) {
        obj.header = {"Api-Token": this.globalData.gameToken ? this.globalData.gameToken.token : null}
      }
      wx.request(obj)
    })
  },

  globalData:{
    userInfo:null
  }
})

