// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showItems:[{
      value:"显示密码",
      checked:false
    }],
    remItems: [{
      value: "记住密码自动登录",
      checked: false
    }],
    username:"",
    password:"",
    isName:false,
    isPass:false
  },

  /**
   * 跳转到绑定的页面
   */
  toRegister:function(){
    wx.navigateTo({
      url: '../register/register'
    })
  
  },
  nameBlur:function(e){
    var name = e.detail.value;
    if(name != ""){
      this.setData({
        isName: true
      })
    }
    this.setData({
      username: name
    })
  },
  passBlur:function(e){
    var pass = e.detail.value;
    if (pass != "") {
      this.setData({
        isPass: true
      })
    }
    this.setData({
      password: pass
    })
  },
  userLogin:function(){
    var that = this;
    if (this.data.isName && this.data.isPass){
      wx.request({
        url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
        method: 'GET',
        data: {
          status: "login",
          userID: that.data.username,
          password: that.data.password
        },
        success: function (res) {
          var data = res.data;
          if(data == 0){
            wx.showToast({
              title: '用户名不存在',
              duration: 3000
            });
          }else if(data == 2){
            wx.showToast({
              title: '用户名和密码不匹配',
              duration: 3000
            });
          }else{
            wx.showToast({
              title: '登录成功',
              duration: 3000,
              success:function(){
                wx.switchTab({
                  url: '../classify/classify',
                })
                wx.setStorage({
                  key: "userID",
                  data: that.data.username
                })
               
              }
            });
          }
          
        }
      })
    }
  }
})