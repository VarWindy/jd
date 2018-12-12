$(function () {
    // 关闭banner
    $('.banner button').click(function () {
        $('.banner').fadeOut(300);
    })

    // 导航栏二级菜单
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

    // 侧边栏二级导航
    $('.grid aside>ul li,.grid aside #aside-con>div').mouseover(function () {
        $('.grid aside #aside-con>div').show();
    })
    $('.grid aside>ul li,.grid aside #aside-con>div').mouseout(function () {
        $('.grid aside #aside-con>div').hide();
    })

    // 轮播图
    $('.grid #movepic img').hide();
    $('.grid #movepic img').eq(0).show();
    var i=1;
    
    function lb() {
        lbtime=setInterval(function () {
            i++;
            $('.grid #movepic img').fadeOut(500);
            $('.grid #movepic img').eq(i).fadeIn(500);

            if(i==7){
                i=-1;
            }
        },2000)
    }

    lb();

    $('.grid #movepic').mouseover(function () {
        clearInterval(lbtime);
    })

    $('.grid #movepic').mouseout(function () {
        lb();
    })
    
    $('.grid #movepic #left').click(function () {
        i-=1;
        if(i<0){
            i=7;
            $('.grid #movepic img').fadeOut(500);
            $('.grid #movepic img').eq(i).fadeIn(500);
        }else{
            $('.grid #movepic img').fadeOut(500);
            $('.grid #movepic img').eq(i).fadeIn(500);
        }
    })

    $('.grid #movepic #rig').click(function () {
        i+=1;
        if(i>7){
            i=0;
            $('.grid #movepic img').fadeOut(500);
            $('.grid #movepic img').eq(i).fadeIn(500);
        }else{
            $('.grid #movepic img').fadeOut(500);
            $('.grid #movepic img').eq(i).fadeIn(500);
        }
    })

    // 右边栏选项卡
    $('#n_top ul li a').eq(1).mouseover(function () {
        $('#xiax').animate({left:'65px'},200);
        $('#r_news>ul').eq(0).hide();
        $('#r_news>ul').eq(1).show();
    })

    $('#n_top ul li a').eq(0).mouseover(function () {
        $('#xiax').animate({left:'12px'},200);
        $('#r_news>ul').eq(1).hide();
        $('#r_news>ul').eq(0).show();
    })

    $('.dm').mouseover(function () {
        var i=0;
        xin=setInterval(function () {
            i+=1;
            if(i==4){
                $('#xin-2').animate({top:'0'},300);
                clearInterval(xin);
            }
        },100)

    })

    $('.dm').mouseout(function () {
        clearInterval(xin);
    })

    $('#xin-2 button').click(function () {
        $('#xin-2').animate({top:'190px'},300);
    })

    // 倒计时
    var lis=document.getElementById('djtime').getElementsByTagName('li');
    function getD(){
        var date= new Date(),
            nt=date.getTime(),
            fd=new Date('2018-11-11 11:11:11'),
            ft=fd.getTime(),
            c=ft-nt,
            day=Math.floor(c/(1000*60*60*24)),
            c=c%(1000*60*60*24),
            hour=Math.floor(c/(1000*60*60)),
            c=c%(1000*60*60),
            min=Math.floor(c/(1000*60)),
            c=c%(1000*60),
            sec=Math.floor(c/1000);

        lis[0].innerHTML=day;
        lis[1].innerHTML=hour;
        lis[2].innerHTML=min;
        lis[3].innerHTML=sec;

    }
    setInterval(getD,1000);

    // 轮播图2
    var lunb=document.getElementById('lunb');
    var isend=true;//防止没走完继续点击执行出现BUG
    $('#lbpic>span').eq(1).click(function () {
        if (isend){
            isend=false;
            var Le=lunb.offsetLeft;
            if(Le<=-1600){
                $('#lunb').css('left','0px');
                $('#lunb').animate({left:'-800px'},800);
            }else{
                $('#lunb').animate({left:Le-800+'px'},800);
            }
            setTimeout(function () {
                isend=true;
            },800)
        }
    })
    $('#lbpic>span').eq(0).click(function () {
        if (isend) {
            isend = false;
            var Le = lunb.offsetLeft;
            if (Le >= 0) {
                $('#lunb').css('left', '-1600px');
                $('#lunb').animate({left: '-800px'}, 800);
            } else {
                $('#lunb').animate({left: Le + 800 + 'px'}, 800);
            }
            setTimeout(function () {
                isend=true;
            },800)
        }
    })

    // 小轮播
    $('#lbright img').eq(0).show();
    var ii=1;
    function xlb() {
        xlbo=setInterval(function () {
            $('#lbright img').hide();
            $('#lbright img').eq(ii).show();
            ii++;
            if(ii==2){
                ii=0;
            }
        },2000)
    }
    xlb();

    $('#lbright').mouseover(function () {
        clearInterval(xlbo);
    })
    $('#lbright').mouseout(function () {
        xlb();
    });

    // 选项卡
    $('#cont-2-left>ul li').mouseover( function(){
        var index = $(this).index(); // 鼠标滑过的对应li的动态索
        $('#cont-2-list>ul').eq(index).show().siblings().hide();
        $('#cont-2-left>ul li a').css('color','gray');
        $('#cont-2-left>ul li a').eq(index).css('color','red');
    })

    // 轮播图

    var lunlun=document.getElementById('mid-lunb');
    function dingsq() {
        lunbtu=setInterval(function () {
            var lef=lunlun.offsetLeft;
            if(lef<=-700){
                $('#mid-lunb').css('left','0');
                $('#mid-lunb').animate({left:'-350px'},700);
            }else{
                $('#mid-lunb').animate({left:lef-350+'px'},700);
            }
        },2000)
    }

    dingsq();

    $('#cont-2-mid').mouseover(function () {
        clearInterval(lunbtu);
    })

    $('#cont-2-mid').mouseout(function () {
        dingsq();
    })
    var isok=true;
    $('#cont-2-mid>ul li').eq(0).click(function () {
        var lef=lunlun.offsetLeft;
        if(isok){
            isok=false;
            if(lef==0){
                $('#mid-lunb').css('left','-700px');
                $('#mid-lunb').animate({left:'-350px'},700);
            }else{
                $('#mid-lunb').animate({left:lef+350+'px'},700);
            }
            setTimeout(function () {
                isok=true;
            },700)
        }
    })
    $('#cont-2-mid>ul li').eq(1).click(function () {
        var lef=lunlun.offsetLeft;
        if(isok){
            isok=false;
            if(lef<=-700){
                $('#mid-lunb').css('left','0px');
                $('#mid-lunb').animate({left:'-350px'},700);
            }else{
                $('#mid-lunb').animate({left:lef-350+'px'},700);
            }
            setTimeout(function () {
                isok=true;
            },700)
        }
    })

    var lunbot=document.getElementById('left3-lunb');
    function dingshiq() {
        lbtu=setInterval(function () {
            var lef=lunbot.offsetLeft;
            if(lef<=-700){
                $('#left3-lunb').css('left','0');
                $('#left3-lunb').animate({left:'-350px'},700);
            }else{
                $('#left3-lunb').animate({left:lef-350+'px'},700);
            }
        },2000)
    }

    dingshiq();

    $('#cont-3-left').mouseover(function () {
        clearInterval(lbtu);
    })

    $('#cont-3-left').mouseout(function () {
        dingsq();
    })
    $('#cont-3-left>ul li').eq(0).click(function () {
        var lef=lunbot.offsetLeft;
        if(isok){
            isok=false;
            if(lef==0){
                $('#left3-lunb').css('left','-700px');
                $('#left3-lunb').animate({left:'-350px'},700);
            }else{
                $('#left3-lunb').animate({left:lef+350+'px'},700);
            }
            setTimeout(function () {
                isok=true;
            },700)
        }
    })
    var hahha=true;
    $('#cont-3-left>ul li').eq(1).click(function () {
        var lef=lunbot.offsetLeft;
        if(hahha){
            hahha=false;
            if(lef<=-700){
                $('#left3-lunb').css('left','0px');
                $('#left3-lunb').animate({left:'-350px'},700);
            }else{
                $('#left3-lunb').animate({left:lef-350+'px'},700);
            }
            setTimeout(function () {
                hahha=true;
            },700)
        }
    })
})