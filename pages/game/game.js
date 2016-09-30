// 拿到全局应用程序实例
const app = getApp()

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '',
    loading: true,
    game: {}
  },

  onLoad (params) {
    app.fetchApi(`/games/${params.id}`)
      .then(d => this.setData({ title: d.data.name_cn, loading: false, game: d.data }))
      .catch(e => {
        this.setData({ title: '获取数据异常', game: {}, loading: false })
        console.error(e)
      })
  },

  onReady () {
    wx.setNavigationBarTitle({ title: this.data.title })
  },

  auto_download(e){
    console.log(e)

  }

})
