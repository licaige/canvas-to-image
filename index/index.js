const {wxml, style} = require('./demo.js')
import tools from '../utils/tools'
Page({
    data: {
        src: '',
        width:'',
        height:'',
    },
    onLoad() {
        this.widget = this.selectComponent('.widget')
        console.log('this.widget 李琦',this.widget)
    },
    //渲染到canvas,生成图片
    renderToCanvas() {
       //使用如下注释的方法，还是存在问题
       /* const wxml=(word)=>{
            return `
  <view class="container">
      <text class="text">`+word+`</text>
  </view>
  `
        }*/
/*
        const style =(width, height)=> {
            return `
  {
    "container": {
      "width":`+width+`,
      "height":`+height+`,
      "flexDirection":"column",
      "justifyContent": "space-around",
      "alignItems": "center"
    },
    "text": {
      "width":`+width+`,
      "height":37,
      "fontSize":20,
      "marginTop":10
    }
  `
        }
        const secondStyle = JSON.parse(style(370, 600))*/
        const p1 = this.widget.renderToCanvas({wxml, style})
        console.log('p1 李琦',p1)
        p1.then((res) => {
            console.log('container res.layoutBox', res.layoutBox)
            console.log('container res', res)
            this.container = res
        })
    },
    //导出图片
    extraImage() {
        const p2 = this.widget.canvasToTempFilePath()
        console.log('p2 李琦',p2)
        p2.then(res => {
            this.setData({
                src: res.tempFilePath,
                width: this.container.layoutBox.width,
                height: this.container.layoutBox.height
            })
        })
    },
    // 保存到相册
    saveImage(){
        let imgSrc = this.data.src;
        tools.saveImage(imgSrc,"二维码保存成功!")
    }
})
