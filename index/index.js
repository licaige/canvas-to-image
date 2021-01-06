const {wxml, style} = require('./demo.js')
Page({
    data: {
        src: ''
    },
    onLoad() {
        this.widget = this.selectComponent('.widget')
    },
    renderToCanvas() {
        const p1 = this.widget.renderToCanvas({wxml, style})
        p1.then((res) => {
            console.log('container res.layoutBox', res.layoutBox)
            console.log('container res', res)
            this.container = res
        })
    },
    //导出图片
    extraImage() {
        const p2 = this.widget.canvasToTempFilePath()
        p2.then(res => {
            this.setData({
                src: res.tempFilePath,
                width: this.container.layoutBox.width,
                height: this.container.layoutBox.height
            })
        })
    }
})
