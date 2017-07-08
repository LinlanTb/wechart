// pages/shopdata/shopdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsinfo: {},
    goodImgs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var goodsid = options.goodId;
    console.log(goodsid)
    wx.request({
      url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
      data: {
        goodsID: goodsid
      },
      method: 'GET',
      success: function (res) {
        // success
        var res = JSON.parse(res.data.slice(9, -1))[0];
        var goodsImgs = JSON.parse(res.goodsBenUrl);
        console.log(goodsImgs)
        that.setData({
          goodsinfo: res
        })
        that.setData({
          goodImgs: goodsImgs
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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