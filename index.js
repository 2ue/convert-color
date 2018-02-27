/**
 * Created by 2ue on 2017/8/20.
 * @function 用于16进制色值与RGB色值之间的互相转换
 */

function color(config) {
    this.short = config && (typeof config.short === 'undefined' || config.short) ? true : false;
    this.rgbReg = /^rgb\(([0-9]{1,3}\,){2}([0-9]{1,3})\)\;?$/;
    this.hexReg = /^#([0-9a-f]{3}|[0-9a-f]{6})$/;
}

color.prototype = {
    constructor: color,
    /**
     * 16进制(Hexadecimal)色值转换成RGB色值
     * @param {String} color 颜色值
     * @return 返回形如rgb(0,0,0)的RGB色值
    */
    toRgb: function (color) {
        var match = color.match(this.hexReg), matchVal, len, dis;
        if(match){
            var res = ['rgb(',',',',','',')'];
            matchVal = match[1].split('');
            len = matchVal.length;
            dis = len === 3 ? 1 : 2;
            for(var i = 0; i < len; i = i + dis){
                var j = parseInt(i / dis) + 1;
                res[j] = (parseInt('0x' + matchVal[i] + matchVal[i + dis - 1])) + res[j];
            }
            return res.join('');
        }else {
            return null;
        }
    },
    /**
     * RGB色值转换成16进制(Hexadecimal)色值
     * @param {String} color 颜色值
     * @param {Boolean} 是否简写，默认为true
     * @return 返回形如#ff0000或#f00的16进制色值
    */
    toHex: function (color, short) {
        color = color.replace(/\s/g, '');
        var match = color.match(this.rgbReg);
        //首先验证是否符合格式，允许空格存在
        //形如rgb(0,255,0)或者rgb(0,255,0);
        if(match){
            var res = ['#', '', '', ''], matchVal = color.match(/\d+/g), len = matchVal.length, isShort = typeof short === 'undefined' ? this.short : !!short;
            for(var i = 0; i < len; i++){
                var val = matchVal[i], xVal = Number(val).toString(16), single = val < 16, sameChar = single || val % 17 === 0;
                if(!sameChar) isShort = false;
                res[i + 1] = single ? [xVal, xVal].join('') : xVal;
            }
            res = res.join('').split('');
            return isShort ? [res[0], res[1], res[3], res[5]].join('') : res.join('');
        }else {
            return null;
        }
    }
};

module.exports = color;