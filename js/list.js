$(function () {
    // 导航栏鼠标事件
    $('.dh>span,#span').mouseover(function () {
        $('.dh>span').css('background-color','white');
        $('#span').css('display','block');
    })
    $('.dh>span,#span').mouseout(function () {
        $('.dh>span').css('background-color','');
        $('#span').css('display','none');
    })

    $('#mdjd,#myjd').mouseover(function () {
        $('#mdjd').css('background-color','white');
        $('#myjd').css('display','block');
    })
    $('#mdjd,#myjd').mouseout(function () {
        $('#mdjd').css('background-color','');
        $('#myjd').css('display','none');
    })

    $('#qybuy,#buy').mouseover(function () {
        $('#qybuy').css('background-color','white');
        $('#buy').css('display','block');
    })
    $('#qybuy,#buy').mouseout(function () {
        $('#qybuy').css('background-color','');
        $('#buy').css('display','none');
    })

    $('#khfw,#fuwu').mouseover(function () {
        $('#khfw').css('background-color','white');
        $('#fuwu').css('display','block');
    })
    $('#khfw,#fuwu').mouseout(function () {
        $('#khfw').css('background-color','');
        $('#fuwu').css('display','none');
    })

    $('#wzdh,#inter').mouseover(function () {
        $('#wzdh').css('background-color','white');
        $('#inter').css('display','block');
    })
    $('#wzdh,#inter').mouseout(function () {
        $('#wzdh').css('background-color','');
        $('#inter').css('display','none');
    })

    $('#sjjd,#ewm,#phonejd').mouseover(function () {
        $('#sjjd').css('background-color','white');
        $('#phonejd').css('display','block');
    })
    $('#sjjd,#ewm,#phonejd').mouseout(function () {
        $('#sjjd').css('background-color','');
        $('#phonejd').css('display','none');
    })

    $('#gouwc,#gwc').mouseover(function () {
        $('#gouwc').css('border-bottom','none');
        $('#gwc').css('display','block');
    })
    $('#gouwc,#gwc').mouseout(function () {
        $('#gouwc').css('border-bottom','1px solid #ccc');
        $('#gwc').css('display','none');
    })

    $('.menu #saoma,.menu #smyh').mouseover(function () {
        $('.menu #smyh').show();
    })
    $('.menu #saoma,.menu #smyh').mouseout(function () {
        $('.menu #smyh').hide();
    })

    // aside鼠标事件
    $('aside>div').mouseover(function () {
        var inde=$(this).index();
        $('.aside-cont').eq(inde).css('display','block');
    })
    $('.aside-cont').mouseover(function () {
        $(this).css('display','block');
    })
    $('aside>div,.aside-cont').mouseout(function () {
        $('.aside-cont').css('display','none');
    })

    // 轮播图
    $('#movepic img').hide();
    $('#movepic img').eq(0).show();
    var i=0;

    function lb() {
        lbtime=setInterval(function () {
            i++;
            $('#movepic img').fadeOut(500);
            $('#movepic img').eq(i).fadeIn(500);

            if(i==5){
                i=-1;
            }
        },2000)
    }

    lb();

    $('#movepic').mouseover(function () {
        clearInterval(lbtime);
    })

    $('#movepic').mouseout(function () {
        lb();
    })

    $('#movepic #left').click(function () {
        i-=1;
        if(i<0){
            i=5;
            $('#movepic img').fadeOut(500);
            $('#movepic img').eq(i).fadeIn(500);
        }else{
            $('#movepic img').fadeOut(500);
            $('#movepic img').eq(i).fadeIn(500);
        }
    })

    $('#movepic #rig').click(function () {
        i+=1;
        if(i>5){
            i=0;
            $('#movepic img').fadeOut(500);
            $('#movepic img').eq(i).fadeIn(500);
        }else{
            $('#movepic img').fadeOut(500);
            $('#movepic img').eq(i).fadeIn(500);
        }
    })

    // container右侧栏鼠标事件
    $('#con-right>div').mouseover(function () {
        var index=$(this).index();
        $('.cri').eq(index).css('display','block');
    })

    $('#con-right>div').mouseout(function () {
        $('.cri').css('display','none');
    })

    // 小轮播图
    $('.yhlb img').hide();
    $('.yhlb img').eq(0).show();
    var c=0;

    function lbc() {
        xlbtime=setInterval(function () {
            c++;
            $('.yhlb img').fadeOut(500);
            $('.yhlb img').eq(c).fadeIn(500);

            if(c==2){
                c=-1;
            }
        },2000)
    }

    lbc();

    $('.yhlb').mouseover(function () {
        clearInterval(xlbtime);
    })

    $('.yhlb').mouseout(function () {
        lbc();
    })

    $('.lef').click(function () {
        c-=1;
        if(c<0){
            c=2;
            $('.yhlb img').fadeOut(500);
            $('.yhlb img').eq(c).fadeIn(500);
        }else{
            $('.yhlb img').fadeOut(500);
            $('.yhlb img').eq(c).fadeIn(500);
        }
    })

    $('.righ').click(function () {
        c+=1;
        if(c>2){
            c=0;
            $('.yhlb img').fadeOut(500);
            $('.yhlb img').eq(c).fadeIn(500);
        }else{
            $('.yhlb img').fadeOut(500);
            $('.yhlb img').eq(c).fadeIn(500);
        }
    })

    // 小轮播图2
    $('.yhlb2 img').hide();
    $('.yhlb2 img').eq(0).show();
    var d=0;

    function lbcd() {
        xlb2time=setInterval(function () {
            d++;
            $('.yhlb2 img').fadeOut(500);
            $('.yhlb2 img').eq(d).fadeIn(500);

            if(d==2){
                d=-1;
            }
        },2000)
    }

    lbcd();

    $('.yhlb2').mouseover(function () {
        clearInterval(xlb2time);
    })

    $('.yhlb2').mouseout(function () {
        lbcd();
    })

    $('.lef2').click(function () {
        d-=1;
        if(d<0){
            d=2;
            $('.yhlb2 img').fadeOut(500);
            $('.yhlb2 img').eq(d).fadeIn(500);
        }else{
            $('.yhlb2 img').fadeOut(500);
            $('.yhlb2 img').eq(d).fadeIn(500);
        }
    })

    $('.righ2').click(function () {
        d+=1;
        if(d>2){
            d=0;
            $('.yhlb2 img').fadeOut(500);
            $('.yhlb2 img').eq(d).fadeIn(500);
        }else{
            $('.yhlb2 img').fadeOut(500);
            $('.yhlb2 img').eq(d).fadeIn(500);
        }
    })

    // 服务推荐选项卡
    $('#ol>li').mouseover(function () {
        var index=$(this).index();
        $('#fwtj .box1>ul').eq(index).show().siblings('ul').hide();
        $(this).addClass('fwli').siblings('li').removeClass();
    })

    $('.ranks').eq(0).show().siblings('.ranks').hide();
    $('.rank-tab li').mouseover(function () {
        var index=$(this).index();
        $(this).addClass('rankli').siblings('li').removeClass();
        $('.ranks').eq(index).show().siblings('.ranks').hide();
    })

    // 楼层
    $('.fl-tab .tabs').click(function(){
        var index=$(this).index()-1;
        var top=$('.flo').eq(index).offset().top;
        $('html').animate({scrollTop:top+1},500);
    })

    var heights=[];
    $('.flo').each(function () {
        heights.push($(this).offset().top)
    })

    $(window).scroll(function () {
        var top=$(window).scrollTop();
        for (var i = 0; i < heights.length; i++) {
            if (top>=heights[i] && top<heights[i+1]) {
                var index=i;
                $('.tabs').eq(index).css("background","#e4393c").siblings('.tabs').css("background","white")
            }else if (top>=heights[heights.length-1]) {
                index=heights.length-1;
                $('.tabs').eq(index).css("background","#e4393c").siblings('.tabs').css("background","white")
            }
        }
    })
})