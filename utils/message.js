export default {
  showLoading: (msg) => {
    if (msg) {
      wx.showLoading({ title: msg });
    } else {
      wx.showLoading();
    }

  },
  hideLoading: () => {
    wx.hideLoading();
  },
  toast: (title) => {
    wx.showToast({ title: title, duration: 2000, icon: "none" });
  },
  stoast: (title) => {
    wx.showToast({
      title: title,
      icon: 'success',
      duration: 2000
    })
  },
}
