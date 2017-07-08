// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:"",
    surepwd:"",
    isName:false,
    isPass:false,
    isSurep:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  userNamev:function(e){
    var username = e.detail.value;
    if(username !=""){
      this.setData({
        isName: true
      })
    }
    this.setData({
      username: username
    })
  },
  userPwd:function(e){
    var userpass = e.detail.value; 
    var reg = /^[a-zA-Z0-9]{6,12}$/;
    if(reg.test(userpass)){
      this.setData({
        isPass: true
      })
    }else{
      wx.showToast({
        title: '密码只能是字母和数字的组合为6-12位',
        duration: 3000
      });
    }
    this.setData({
      password:userpass
    })
  },
  surePwd:function(e){
    var surepass = e.detail.value;
    if(this.data.password==surepass){
      this.setData({
        isSurep: true
      })
    }else{
      wx.showToast({
        title: '两次密码输入不一样，请重新输入',
        duration: 3000
      });
    }
    this.setData({
      surepwd:surepass
    })
  },
  regis:function(){
    var that = this;
    if (this.data.isName && this.data.isPass && this.data.isSurep){
      wx.request({
        url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
        method: 'GET',
        data: {
          status: "register",
          userID: that.data.username,
          password: that.data.password
        },
        success: function (res) {
          var data = res.data;
          if(data == 0){
            wx.showToast({
              title: '用户名已被注册',
              duration: 3000
            });
          }else if(data == 1){
            wx.showToast({
              title: '注册成功',
              duration: 3000,
              success:function(){
                wx.navigateTo({
                  url: '../login/login'
                })
              }
            });
          }
        }
      })
    }
    
  }
})