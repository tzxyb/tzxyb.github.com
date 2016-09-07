/**
 * Created by Administrator on 2016/8/25 0025.
 */
;(function( $, formFormat ) {
    $.extend($.fn, {
        'fadeIn': function( settings ) {
            var _this = $(this);
            settings && settings.addClass && _this.addClass(settings.addClass);
            _this.css('opacity', '0').animate({'opacity':1}, settings && settings.time || 500, '', function() {
                settings && settings.callBack && settings.callBack.call(_this);

            });
            return _this;
        },
        'fadeOut': function( settings ) {
            var _this = $(this);
            _this.animate({'opacity':0}, settings && settings.time || 500, '', function() {
                settings.removeClass && _this.removeClass(settings.removeClass);
                settings && settings.callBack && settings.callBack.call(_this);

            });
            return _this;
        }
    });

    var btn = $('.p4_mc img.submit');
        btn.on('click',function(){
            var name = $('.form input.name').val();
            var tel = $('.form input.tel').val();
            var city = $('.form input.city').val();

            if ( formFormat.isEmpty(name) ) {
                alert('请输入姓名');
                return;
            }
            if ( formFormat.isEmpty(tel) ) {
                alert('请输入电话号码');
                return;
            }
            if ( !formFormat.isPhone(tel) ) {
                alert('电话号码格式不正确');
                return;
            }
            if ( formFormat.isEmpty(city) ) {
                alert('请输入地址');
                return;
            }

            save_userinfo(name,tel,city);

            //alert("ok");
           // document.getElementById("p4").style.display = "none";
           //loadPage(4);

            return;


            $.ajax({
                'type': 'post',
                'url': 'http://www.runh5.com/yui/index.php?s=Home/Yui/user_set',
                'dataType': 'json',
                'data': {
                    'name': name,
                    'telephone': tel,
                    'city': city,
                },
                'success': function(data) {
                    oLayer.fadeOut({'removeClass': 'active'});
                    switch (data.res) {
                        case 1:
                            failureModule.show();
                            break;
                    }
                }
            });

        })


})( Zepto, formFormat );
