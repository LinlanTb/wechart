// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
      method: 'GET',
      success: function (res) {
        // success
        var res = JSON.parse(res.data.slice(9, -1));
        that.setData({
          goodslist: res
        })
      },
      fail: function (e) {

      }
    })
  },
  toDetail: function (e) {
    var goodsID = e.currentTarget.dataset.goodsid;
    wx.navigateTo({
      url: '../detail/detail?goodsid=' + goodsID,
      success: function (res) {
        // success
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})