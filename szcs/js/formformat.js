/**
 * Created by LinJe on 2016/2/23.
 * 轻量级表单验证库
 */
var formFormat = {

    //验证是否为空
    'isEmpty': function( str ) {
        return str.length == 0;
    },

    /**
     * 限定字符长度
     * 注：按字符串个数来计算长度
     * @param[string] 1 要限定的原字符
     * @param [array] 2 限定的范围； [2,5]表示要限定字符长度在2到5的范围内；[6]表示限定字符长度在6及其以内
     * @param [boolean] 3 是否去除原字符串两边空格
     * @param [boolean] 4 是否去除原字符串所有空格（包括中间空格） 注：当此参数为true时，param 3 无效
     * @returns [boolean] 返回限定结果的布尔值
     */
    'limitString': function() {
        switch (arguments.length) {
            case 2:
                //不去除空格
                return this.$limitString(arguments[0], arguments[1]);
                break;
            case 3:
                //去除两边空格
                return arguments[2] ? this.$limitString(this.$trim(arguments[0]), arguments[1]) : this.$limitString(arguments[0], arguments[1]);
                break;
            case 4:
                //去除所有空格
                return arguments[3] ? this.$limitString(this.$trim(arguments[0], 'g'), arguments[1]) : arguments[2] ? this.$limitString(this.$trim(arguments[0]), arguments[1]) : this.$limitString(arguments[0], arguments[1]);
                break;
            default :
                return false;
                break;
        }
    },

    /**
     * 限定字符长度
     * 注：按字节来计算长度 英文1字节，汉字2个字节
     * 调用和其他说明参考 limitString 方法
     */
    'limitStr': function() {
        switch (arguments.length) {
            case 2:
                //不去除空格
                return this.$limitStr(arguments[0], arguments[1]);
                break;
            case 3:
                //去除两边空格
                return arguments[2] ? this.$limitStr(this.$trim(arguments[0]), arguments[1]) : this.$limitStr(arguments[0], arguments[1]);
                break;
            case 4:
                //去除所有空格
                return arguments[3] ? this.$limitStr(this.$trim(arguments[0], 'g'), arguments[1]) : arguments[2] ? this.$limitStr(this.$trim(arguments[0]), arguments[1]) : this.$limitStr(arguments[0], arguments[1]);
                break;
            default :
                return false;
                break;
        }
    },

    //验证手机号
    'isMobile': function( str ) {
        return /^[1][3,4,5,7,8]\d{9}$/.test(str);
    },

    /*
     *验证固定电话
     *1、区号-电话号
     *2、区号-电话号-分机号
     */
    'isTelephone': function( str ) {
        return /0\d{2}-\d{8}|0\d{2}-\d{7}|0\d{3}-\d{7}|0\d{3}-\d{8}/.test(str);
    },

    //验证电话号码（包括手机+固定电话）
    'isPhone': function( str ) {
        var isMobile = this.isMobile(str),
            isTelephone = this.isTelephone(str);

        return isMobile ? isMobile : isTelephone ? isTelephone : false;
    },

    //验证邮箱
    'isEmail': function( str ) {
        return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(str);
    },

    //验证邮政编码
    'isZipcode': function( str ) {
        return /^[1-9][0-9]{5}$/.test(str);
    },

    //验证身份证号
    'isIdcode': function( str ) {
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    },

    //验证纯数字
    'isNumber': function( str ) {
        return /^\d+$/.test(str);
    },

    //限制数字大小范围
    'limitNumder': function( str, aLimit ) {
        return this.isNumber(str) && str >= aLimit[0] && str <= aLimit[1];
    },

    //验证纯英文
    'isEng': function( str ) {
        return /^[a-zA-Z]+$/.test(str);
    },

    //含有英文
    'hasEng': function( str ) {
        return /[a-zA-Z]/.test(str);
    },

    //验证纯中文
    'isCn': function( str ) {
        return /^[^u4E00-u9FA5]+$/.test(str);
    },

    //含有中文
    'hasCn': function( str ) {
        return /[\u4e00-\u9fa5]/.test(str);
    },

    //验证字母、数字
    'isEngNum': function( str ) {
        return /^[a-zA-Z0-9]+$/.test(str);
    },

    //验证字母、数字和下划线
    'isw': function( str ) {
        return /^\w+$/.test(str);
    },

    //单个单选框或复选框是否选中
    'isChecked': function( checkbox ) {
        return checkbox.checked;
    },

    //验证网址
    'isUrl': function( url ) {
        return /((https|http|ftp|rtsp|mms):\/\/)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/g.test(url);
    },


    /////////////////辅助方法//////////////////////
    //限制字符长度
    '$limitString': function( str, aLimit ) {
        if ( aLimit.length == 1 ) {
            return new RegExp('^\\s*[\\s\\S]{1,'+aLimit[0]+'}\\s*$', 'g').test(str);
        } else {
            return new RegExp('^[\\s\\S]{'+aLimit[0]+','+aLimit[1]+'}$', 'g').test(str);
        }
    },

    //限制字符长度
    '$limitStr': function( str, aLimit ) {
        if ( aLimit.length == 1 ) {
            return this.$strLength(str) <= aLimit[0];
        } else {
            return this.$strLength(str) >= aLimit[0] && this.$strLength(str) <= aLimit[1];
        }
    },

    //去掉字符串中所有空格(包括中间空格,需要设置第2个参数为:g)
    '$trim': function( str, is_global ) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, '');
        if( is_global && is_global.toLowerCase() == 'g' ) {
            result = result.replace(/\s/g, '');
        }
        return result;
    },

    //获取字符串长度（区分中英文长度）
    '$strLength': function( str ) {
        return str.replace(/[^\x00-\xff]/g,"aa").length;
    }

};