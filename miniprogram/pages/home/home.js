// miniprogram/pages/home/home.js
const app = getApp();
console.log(app.globalData.name)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Coderwhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      {id:111,name:'james',age:28},
      {id:112,name:'curry',age:32},
      {id:113,name:'why',age:18}
    ],
    counter:0
  },

  handleBtnClick:function(){
    this.setData({
      counter:this.data.counter + 1
    })
  },

  handleSubtraction(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleUserClick(event){
    console.log("222222")
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload")
    wx.request({
      url: 'url',
      success:(res)=>{
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  }
})

