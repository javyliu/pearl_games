
const app = getApp()
Page({
  data:{
    games: []
  },
  onLoad(){
    app.fetchApi("/games").then(res => {
      if(!res.data.error){
        this.setData({
          games: res.data.games
        })
      }
    })
  },
  onReady(){
    // 页面渲染完成
  },
  onShow(){
    // 页面显示
  },
  onHide(){
    // 页面隐藏
  },
  onUnload(){
    // 页面关闭
  }
})




