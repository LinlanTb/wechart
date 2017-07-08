// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsinfo:{},
    goodImgs:[],
    goodsID:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var goodsid = options.goodsid;
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
        that.setData({
          goodsinfo: res
        })
        that.setData({
          goodImgs: goodsImgs
        })
        that.setData({
          goodsID: goodsid
        })
      }
    })
  },
  toShopdata:function(e){
    var goodsID = e.currentTarget.dataset.goodsid;
    console.log(goodsID)
    wx.navigateTo({
      url: '../shopdata/shopdata?goodId=' + goodsID,
    })
  },
  /**
   * 加入购物车的方法
   */
  addCart:function(){
    var that = this;
    wx.getStorage({
      key: 'userID',
      success: function (res) {
        var userID = res.data;
        var goodsID = that.data.goodsID;
        wx.request({
          url: 'http://datainfo.duapp.com/shopdata/getCar.php',
          method:"GET",
          data:{
            userID:userID,
            goodsID: goodsID,
            number:1
          },
          success:function(res){
            var data = res.data.slice(9,-1);
            console.log(res)
            if(data == 1){
              wx.showToast({
                title: '加入购物车成功',
                duration: 2000
              });
            }else{
              wx.showToast({
                title: '加入购物车失败',
                duration: 2000
              });
            }
          }
        })
      }
    })
    
  }
})