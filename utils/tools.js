function formatDate(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('-');
}

function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 */
function formatDateTime(number, format) {
    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];
    var date = new Date(number);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));
    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));
    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

//补零
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

//常用正则
function regexConfig() {
    var reg = {
        email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        //Email正则
        ePattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        phone: /^1(3|4|5|7|8|6|9)\d{9}$/,
        phoneTest: /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/,
        // 手机号码正则
        mPattern: /^1[345789]\d{9}$/,
        //用户名正则，4到16位（字母，数字，下划线，减号）
        uPattern: /^[a-zA-Z0-9_-]{4,16}$/,
        //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
        pPattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
        //正整数正则
        posPattern: /^\d+$/,
        //负整数正则
        negPattern: /^-\d+$/,
        //整数正则
        intPattern: /^-?\d+$/,
        //正数正则
        posPatternNum: /^\d*\.?\d+$/,
        //负数正则
        negPatternNum: /^-\d*\.?\d+$/,
        //数字正则
        numPattern: /^-?\d*\.?\d+$/,
        //身份证号正则
        cP: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        //URL正则
        urlP: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        //IPv4地址正则
        ipP: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        //十六进制颜色正则
        cPattern: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        //日期正则，简单判定,未做月份及日期的判定
        dP1: /^\d{4}(\-)\d{1,2}\1\d{1,2}$/,
        //日期正则，复杂判定
        dP2: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
        //QQ号正则，5至11位
        qqPattern: /^[1-9][0-9]{4,10}$/,
        // qqPattern: /^[1-9]\d{4,9}$/,
        //微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
        // wxPattern: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        //适用性强
        wxPattern: /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/,
        //车牌号正则
        cPatternNum: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
        //包含中文正则
        cnPattern: /[\u4E00-\u9FA5]/,
        //邮政编码
        isPostcode: /^[1-9]\d{5}$/g,
        //检查字符串是否是数字
        isNumber: /^\d+$/,
        // 正则验证银行卡方法
        regex: /^(998801|998802|622525|622526|435744|435745|483536|528020|526855|622156|622155|356869|531659|622157|627066|627067|627068|627069)\d{10}$/,

    }
    return reg;
}

function delHtmlTag(str) {
    return str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
}

function Rad(d) {
    return d * Math.PI / 180.0; //经纬度转换成三角函数中度分表形式。
}

//计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
function getDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = Rad(lat1);
    var radLat2 = Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Rad(lng1) - Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里
    //s=s.toFixed(4);
    return s;
}

//得到火把的函数5个
function converToStarsArray(stars) {
    var array = [];
    //如果为整数0,1,2,3,4,5
    if (stars.toString().length == 1) {
        var num = stars.toString().substring(0, 1);
        for (var i = 1; i <= 5; i++) {
            if (i <= num) {
                array.push(1);
            } else {
                array.push(0);
            }
        }
    } else {
        //如果是0.5,1.5，2.5,3.5,4.5
        var num = stars.toString().substring(0, 1);
        for (var i = 1; i <= 5; i++) {
            if (i <= num) {
                array.push(1);
            } else {
                array.push(0);
            }
        }
        array[num] = 2;
    }
    return array;
}

//得到火把的函数6个
function converToStars(stars) {
    var array = [];
    //如果为整数0,1,2,3,4,5,6
    if (stars.toString().length == 1) {
        var num = stars.toString().substring(0, 1);
        for (var i = 1; i <= 6; i++) {
            if (i <= num) {
                array.push(1);
            } else {
                array.push(0);
            }
        }
    } else {
        //如果是0.5,1.5，2.5,3.5,4.5,5.5
        var num = stars.toString().substring(0, 1);
        for (var i = 1; i <= 6; i++) {
            if (i <= num) {
                array.push(1);
            } else {
                array.push(0);
            }
        }
        array[num] = 2;
    }
    return array;
}

//得到省市级联的code
function getCode(getCode, region) {
    //仅仅需要目标城市的实参及region（region为code集合）
    let codeNum = null;
    var province = getCode[0];
    var city = getCode[1];
    if (city == '县') {
        city = ' ';
    } else {
        // city = ' ' + city+' ';
        city = city;
    }
    var area = getCode[2];
    //对于整个json数组进行首次循环
    for (let i = 0; i < region.region.length; i++) {
        //通过循环，得到province对应的code
        if (province == region.region[i].region) {
            //通过循环，拿到city对应的code
            for (var j = 0; j < region.region[i].regionEntitys.length; j++) {
                //如果city这个code存在的情况下
                if (city == region.region[i].regionEntitys[j].region) {
                    // 通过循环，进入area区域
                    for (var k = 0; k < region.region[i].regionEntitys[j].regionEntitys.length; k++) {
                        if (area == region.region[i].regionEntitys[j].regionEntitys[k].region) {
                            codeNum = region.region[i].regionEntitys[j].regionEntitys[k].code
                        }
                    }
                    //返回一个变量，让其可以自定义对应code的名字
                    return codeNum;
                }
                // 对于city为"县进行判定"
                if (city == " ") {
                    for (var k = 0; k < region.region[i].regionEntitys[j].regionEntitys.length; k++) {
                        if (area == region.region[i].regionEntitys[j].regionEntitys[k].name) {
                            codeNum = region.region[i].regionEntitys[j].regionEntitys[k].code;
                        }
                    }
                    //    返回一个变量，让其可以自定义对应code的名字
                    return codeNum;
                }
            }
        }
    }
}

//得到newAddress
function newAddress(getCode) {
    //仅仅需要目标城市的实参即可
    var province = getCode[0];
    var city = getCode[1];
    if (city == '县') {
        city = ' ';
    } else {
        city = ' ' + city + ' ';
    }
    var area = getCode[2];
    var newAddress = province + city + area;
    return newAddress;
}

//判断获取实际定位的code（可能为区级code），是否在区级code中
function gitareaArray(code, Array) {
    if (Array) {
        for (var i = 0; i < Array.length; i++) {
            if (code == Array[i].code) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

//数组去重的方法
function uniq(array) {
    let temp = [];
    let index = [];
    let l = array.length;
    for (var i = 0; i < l; i++) {
        for (var j = i + 1; j < l; j++) {
            if (array[i] === array[j]) {
                i++;
                j = i;
            }
        }
        temp.push(array[i]);
        index.push(i);
    }
    return temp;
}

//数组对象按照name去重
function arrayUnique(arr, name) {
    let hash = {};
    return arr.reduce(function (item, next) {
        hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
        return item;
    }, []);
}

//对象数组的去重 去除重复的元素
function uniqObjInArray(objarray) {
    let len = objarray.length;
    let tempJson = {};
    let res = [];
    for (let i = 0; i < len; i++) {
        //取出每一个对象
        tempJson[JSON.stringify(objarray[i])] = true;
    }
    let keyItems = Object.keys(tempJson);
    for (let j = 0; j < keyItems.length; j++) {
        res.push(JSON.parse(keyItems[j]));
    }
    return res;
}

//按照index从小到大排序
function compare(protoTypeName) {
    return function (object1, object2) {
        let val1 = object1[protoTypeName];
        let val2 = object2[protoTypeName];
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

//海报拼装数据
function sharingPosters(temporary) {
    let newArray = []
    let newTe = temporary
    for (let i in temporary) {
        let newObj = {}
        newObj.index = ''
        newObj.onShow = ''
        newObj.minSharePath = ''
        newObj.sharePath = ''
        newObj.resType = ''
        newObj.picId = ''
        for (let j in newTe) {
            if (newTe[j].index == temporary[i].index && i !== j) {
                newObj.index = temporary[i].index
                newObj.onShow = temporary[i].onShow
                newObj.resType = temporary[i].resType
                newObj.picId = temporary[i].picId
                newObj.minSharePath = newTe[j].minSharePath ? newTe[j].minSharePath : temporary[i].minSharePath
                newObj.sharePath = newTe[j].sharePath ? newTe[j].sharePath : temporary[i].sharePath
                newArray.push(newObj)
            }
        }
    }
    return newArray
}

//延迟分钟
function getFormatDateMin(date, min) {
    let nd = new Date(date);
    nd = nd.valueOf();
    nd = nd + min * 60 * 1000;
    nd = new Date(nd);
    let y = nd.getFullYear();
    let m = nd.getMonth() + 1;
    let d = nd.getDate();
    let h = nd.getHours();
    let minutes = nd.getMinutes();
    let Seconds = nd.getSeconds();
    if (m <= 9) m = "0" + m;
    if (d <= 9) d = "0" + d;
    if (h <= 9) d = "0" + h;
    if (minutes <= 9) minutes = "0" + minutes;
    if (Seconds <= 9) Seconds = "0" + Seconds;
    let cdate = y + "-" + m + "-" + d + ' ' + h + ':' + minutes + ':' + Seconds;
    return cdate;
    // 2020-06-23 11:32:00
}

/*
 *  时间往date延days天
 */
function getFormatDateCommit(date, days) {
    let nd = new Date(date);
    nd = nd.valueOf();
    nd = nd + days * 24 * 60 * 60 * 1000;
    nd = new Date(nd);
    let y = nd.getFullYear();
    let m = nd.getMonth() + 1;
    let d = nd.getDate();
    if (m <= 9) m = "0" + m;
    if (d <= 9) d = "0" + d;
    let cdate = y + "-" + m + "-" + d;
    return cdate;
}

//去除/////及保证文本换行
function wrapText(str) {
    return str.replace(/(\\)+/g, "\\").replace(/(\\n)+/g, "\n")
}

//兼容苹果机型的时间处理问题
function getTime(dateTime) {
    return (new Date(dateTime.replace(/-/g, "/"))).getTime()
}

//常规的倒计时模板
function getEndTime(endTime) {
    let startTime = new Date().getTime()
    let s = parseInt((endTime - startTime) / 1000);
    if (s >= 0) {
        let d = parseInt(s / 3600 / 24);
        if (d < 10) d = "0" + d;
        let h = parseInt(s % (3600 * 24) / 3600);
        if (h < 10) h = "0" + h;
        let m = parseInt(s % 3600 / 60);
        if (m < 10) m = "0" + m;
        s %= 60;
        if (s < 10) s = "0" + s;
        return d + "天" + h + "小时" + m + "分" + s + "秒"
    } else {
        return '活动结束了'
    }
}

//获取视频播放路径
function getSrc(url, that) {
    var newUrl = null;
    var _this = that;
    // var url = '这里就是你通过分享链接拿到的腾讯视频url'
    var url = url;
    //通过正则表达式拿到分享地址中vid的值
    if (url.includes("vid=")) {
        var vid = takeParam(url, "vid");
    }

    //此函数为获取url中指定参数的函数
    function takeParam(url, key) {
        var a = url;
        var b = key;
        try {
            var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
            return reg.exec(a).toString().split("=")[1];
        } catch (e) {
        }
        return "";
    }

    //通过以下接口拿到视频的详细参数 通过正则拼装成一个可以在小程序中使用的URl
    //https://vv.video.qq.com这个要是上线使用，需要在小程序开发工具里面配置成合法域名
    wx.request({
        url: "https://vv.video.qq.com/getinfo?vid=" + vid + "&platform=101001&charge=0&otype=json",
        // url: "https://api.maobc.com/getinfo?vid=" + vid + "&platform=101001&charge=0&otype=json",
        method: 'get',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
            var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
            var dataJson1 = dataJson.replace(/;qwe/, '');
            var data = JSON.parse(dataJson1);
            var url = data.vl.vi[0].ul.ui[0].url
            var url2 = url.replace(/http/, "https"); //把'http'替换为https
            var fu = data.vl.vi[0].fn
            var fvkey = data.vl.vi[0].fvkey
            var a = url2 + fu + '?vkey=' + fvkey
            _this.setData({
                url: a
            })
            newUrl = _this.data.url;
        }
    })
}

//图片路径本地化
function getImage(url) {
    return new Promise((resolve, reject) => {
        wx.getImageInfo({
            src: url,
            success: function (res) {
                resolve(res.path)
            },
            fail: function () {
                reject("")
            }
        })
    })
}

function getImageAll(image_src) {
    let that = this;
    let all = [];
    image_src.map(function (item) {
        all.push(getImage(item))
    })
    return Promise.all(all)
}

//保存提示
function showTipsUI(txt) {
    wx.showToast({
        title: txt,
        icon: 'none'
    })
}

// 保存图片
function saveImage(imgSrc, meg) {
    wx.getSetting({
        success(res) {
            if (!res.authSetting['scope.writePhotosAlbum']) { //未授权
                wx.authorize({
                    scope: 'scope.writePhotosAlbum',
                    success() {
                        wx.saveImageToPhotosAlbum({
                            filePath: imgSrc,
                            success: function (data) {
                                showTipsUI(meg);
                            },
                            fail: function (err) {
                            }
                        });
                    },
                    fail() {
                        wx.showModal({
                            title: '提示',
                            content: '点击确定，保存图片到相册。',
                            success: function (res) {
                                if (res.confirm) {
                                    wx.openSetting({
                                        success(res) {
                                            if (res.authSetting["scope.writePhotosAlbum"]) { //如果用户重新同意了授权登录
                                                wx.saveImageToPhotosAlbum({
                                                    filePath: imgSrc,
                                                    success: function (data) {
                                                        showTipsUI(meg);
                                                    },
                                                    fail: function (err) {
                                                    }
                                                });
                                            }
                                        },
                                        fail() {
                                        }
                                    })
                                }
                            }
                        })
                    }
                });
            } else { //已授权
                wx.saveImageToPhotosAlbum({
                    filePath: imgSrc,
                    success: function (data) {
                        showTipsUI(meg);
                    },
                    fail: function (err) {
                    }
                });
            }
        }
    });
}

//特殊字符验证
function isEmojiCharacter(substring) {
    var reg = new RegExp("[~#^$@%&!?%*]", 'g');
    if (substring.match(reg)) {
        return true;
    }
    for (var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i);
        if (0xd800 <= hs && hs <= 0xdbff) {
            if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                if (0x1d000 <= uc && uc <= 0x1f77f) {
                    return true;
                }
            }
        } else if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1);
            if (ls == 0x20e3) {
                return true;
            }
        } else {
            if (0x2100 <= hs && hs <= 0x27ff) {
                return true;
            } else if (0x2B05 <= hs && hs <= 0x2b07) {
                return true;
            } else if (0x2934 <= hs && hs <= 0x2935) {
                return true;
            } else if (0x3297 <= hs && hs <= 0x3299) {
                return true;
            } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                || hs == 0x2b50) {
                return true;
            }
        }
    }
}

//弹窗部分
function showToast(txt, isSuccess) {
    if (!isSuccess) {
        wx.showToast({
            title: txt,
            icon: 'none'
        });
    } else {
        wx.showModal({
            title: '提示',
            showCancel: false,
            content: txt,
            success: function () {
                wx.navigateBack();
            }
        });
    }
}

//获取当前月份的天数
function getNowDate() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let d = new Date(year, month, 0)
    return d.getDate()
}

//获取某年某月的天数
function mGetDate(year, month) {
    let d = new Date(year, month, 0);
    return d.getDate();
}

// 获取当前时间
function getNowTime() {
    let dateTime
    let yy = new Date().getFullYear()
    let mm = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
    let dd = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
    let hh = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()
    let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
    let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
    dateTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
    console.log(dateTime)
    return dateTime
}

module.exports = {
    formatTime,
    formatDate,
    formatNumber,
    regexConfig,
    getDistance,
    formatDateTime,
    converToStarsArray,
    getCode,
    newAddress,
    getSrc,
    converToStars,
    gitareaArray,
    arrayUnique,
    uniq,
    uniqObjInArray,
    compare,
    sharingPosters,
    getFormatDateMin,
    getFormatDateCommit,
    wrapText,
    getTime,
    getEndTime,
    getImageAll,
    saveImage,
    isEmojiCharacter,
    showToast,
    getNowDate,
    mGetDate,
    getNowTime,
    showTipsUI
}
