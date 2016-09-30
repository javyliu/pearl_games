Page({
  data: {
    pictures: [
      {url:'http://m.pipgame.com/cycle_imgs/201607181844371347.jpg'},
      {url:'http://m.pipgame.com/cycle_imgs/201607181853526422.jpg'},
      {url:'http://m.pipgame.com/cycle_imgs/201607181849459793.jpg'},
      {url:'http://m.pipgame.com/cycle_imgs/201607181845074901.jpg'}
    ]

  },

  // onLoad () {
  //   douban.find('in_theaters', 1, 3)
  //     .then(d => {
  //       this.setData({ movies: d.subjects, loading: false })
  //     })
  //     .catch(e => {
  //       console.error(e)
  //       this.setData({ movies: [], loading: false })
  //     })
  // },

  start () {
    // TODO: 访问历史的问题
    wx.redirectTo({ url: '../profile/profile' })
  }
})
