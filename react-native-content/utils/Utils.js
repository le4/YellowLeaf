/**
 * Created by android on 2017/3/29.
 */
import {Dimensions, PixelRatio} from 'react-native';

var Utils = {
    //获取缩放系数
    getAutoScaleHeight(){
        let k = this.getScreenWidth() / 750;
        // this.log('屏幕系数为==》' + k);
        return k < 1 ? k : 1;
    },
    getScreenWidth(){
        return Dimensions.get('window').width;
    },
    getComponentKey() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }, isTextEmpty(data){
        if (data == "" || data == undefined || data == null) {
            return true;
        }
        return false;
    }

}
module.exports = Utils;
