const {wxml, style} = require('./demo.js')
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
    }
})
