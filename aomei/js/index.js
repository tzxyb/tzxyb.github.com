 $('.page-1').show();
    $('.btn-1').click(function(){
        $('.page-1').hide();
        $('.page-2').show();
    });
    $('.btn-2').click(function(){
        $('.page-2').hide();
        $('.page-3').show();
    });
    $('.btn-3').click(function(){
        $('.page-3').hide();
        $('.page-4').show();
    });
    $('.btn-4').click(function(){
        $('.btn-4').children('i').removeClass('cur');
        $(this).children('i').addClass('cur');
        $('.page-4').delay(500).hide(0);
        $('.page-5').delay(500).show(0);
    });
    $('.btn-5').click(function(){
        $('.btn-5').children('i').removeClass('cur');
        $(this).children('i').addClass('cur');
        $('.page-5').delay(500).hide(0);
        $('.page-6').delay(500).show(0);
    });

    $('.btn-6-a').click(function(){
        $('.btn-6').children('i').removeClass('cur');
        $(this).children('i').addClass('cur');
        $('.page-6').delay(500).hide(0);
        $('.page-7').delay(500).show(0);
        $('.page-7 .alert-bg-7').delay(500).hide(0);
        $('.page-7 .head-2').delay(500).show(0);
    });
    $('.btn-mm').click(function(){
        $('.page-7').show();
        $('.page-7 .head-2').hide();
        $('.page-7 .turn').hide();
        $('.page-7 .alert-bg-7').show();
        $('.alert-con').show();
        $('.alert-7').show();
    })
    $('.btn-6-b').click(function(){
        $('.btn-6').children('i').removeClass('cur');
        $(this).children('i').addClass('cur');
        $('.page-6').delay(500).hide(0);
        $('.page-7').delay(500).show(0);
        $('.page-7 .head-2').delay(500).hide(0);
        $('.page-7 .turn').delay(500).hide(0);
        $('.alert-con').delay(500).show(0);
        $('.alert-7').delay(500).show(0);
    });
    $('.btn-7').click(function(){
        $('.page-7').hide();
        window.location.href="http://mktm.10101111.com/html5/2015/aomei/get.html";
    });
    $('.btn-8-l').click(function(){
        $('.page-8').hide();
        window.location.href="http://mktm.10101111.com/html5/2015/aomei/tel.html?WT.mc_mk=201400711";
    });
    $('.btn-8-r').click(function(){
        $('.alert-con').show();
        $('.alert-share').show();
        $('#video').hide();
        $('.page-8 .head .pic-video').show()
    });
    $('.alert-share').click(function(){
        $(this).hide();
        $('.alert-con').hide();
        $('#video').show();
        $('.page-8 .head .pic-video').hide()
    });
    $('.btn-know').click(function(){
        $('.alert-know').hide();
        $('.alert-con').hide()
    })
    $('.btn-share').click(function(){
    	$('.alert-get').hide();
    	$('.alert-share').show()
    })

    $('.page-2 .btns i').click(function(){
        $('.page-2 .btns i').removeClass('checked');
        $(this).addClass('checked')
    })