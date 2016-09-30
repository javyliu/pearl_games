//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log('onLoad')
    // var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    })
    //使用当前微信号登录游戏中心
    app.fetchApi("/account/login", {username: 'qmliu1',password: "123123"},"GET",false)
      .then( res => {
        if (res.data.error) {
          console.log(res.data.error)
        }else{
          app.globalData.gameToken = res.data
          this.setData({
            message: "已登录游戏中心"
          })
        }

      })
  }
})

