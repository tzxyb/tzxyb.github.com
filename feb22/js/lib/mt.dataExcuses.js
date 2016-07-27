/**
 *与服务器对接接口
 *[mtDataExcuses]
 *
 *@param {function} mtDataExcuses.submitMobilePhoneNumber -提交手机号码
 */
var mtDataExcuses = {
  /**
   *提交手机号码
   *[mtDataExcuses.submitMobilePhoneNumber]
   *
   *@param {Object}   options            -参数集合
   *@param {function} options.onStart    -函数开始运行的时候执行
   *@param {function} options.onComplete -ajax成功完成后调用
   */
  submitMobilePhoneNumber: function(options) {
    options = options || {};
    options.onStart = options.onStart || function() {};
    options.onComplete = options.onComplete || function() {};

    $.ajax({
      url: "",
      cache: false,
      success: function(html) {

        options.onComplete();
      },
      async: false
    });
  }
};
