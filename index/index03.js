import tools from '../utils/tools'

Page({
    data: {
        src: '',
        width: '',
        height: '',
    },
    onLoad() {
        this.widget = this.selectComponent('.widget')
    },
    //渲染到canvas,生成图片
    renderToCanvas() {
        let bg = 'https://applet.lanlinker.com/lanlinker-applets/image/0d8001282e424ab8a070006dec295862_sharebg.png'
        const wxml = (bg) => {
            return `
 <view class="outline">
    <image class="outlineImg" src="${bg}"></image>
    <image class="lineImg" src="https://applet.lanlinker.com/lanlinker-applets/image/0085f45f92e4431ba1b250eab86a9858_xiaochengxun.jpg"></image>
</view>
  `
        }
        const style = (width, height) => {
            return `
                      {
                         outline: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:` + width + `,
                            height:` + height + `,
                            position: 'relative',
                        },
                         outlineImg: {
                            display: 'block',
                            width: 576,
                            height: 768,
                        },
                        lineImg: {
                            position: 'absolute',
                            width: 260,
                            height: 260,
                            left: 137,
                            bottom: 160,
                        }
                    `
        }
        const secondStyle = JSON.parse(style(576, 768))
        const p1 = this.widget.renderToCanvas({wxml, style: secondStyle})
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
    },
    // 保存到相册
    saveImage() {
        let imgSrc = this.data.src;
        tools.saveImage(imgSrc, "二维码保存成功!")
    }
})
