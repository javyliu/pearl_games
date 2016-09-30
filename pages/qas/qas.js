var app = getApp()
Page({
  data:{
    title: '加载中...',
    qas: [],
    loading: true,
    meta: {}
  },
  onLoad(options){
    // let self = this
    app.fetchApi("/qas",{game_name: 'nt', page: 1}).then(res => {
      if (res.data.error) {
        console.log(res.data.error)
      } else {
        this.setData({
          qas: res.data.qas,
          meta: res.data.meta,
          loading: false,
          title: "我的问题"
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

