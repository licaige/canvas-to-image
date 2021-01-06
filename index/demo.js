const wxml = `
<view class="outline">
    <image class="outlineImg" src="https://applet.lanlinker.com/lanlinker-applets/image/0d8001282e424ab8a070006dec295862_sharebg.png"></image>
    <image class="lineImg" src="https://applet.lanlinker.com/lanlinker-applets/image/0085f45f92e4431ba1b250eab86a9858_xiaochengxun.jpg"></image>
</view>
`
const style = {
    outline: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 576,
        height: 768,
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
}

module.exports = {
    wxml,
    style
}
