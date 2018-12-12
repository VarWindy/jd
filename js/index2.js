$(function () {
    // 特色推荐轮播图
    var spetimer;
    var speL=document.getElementsByClassName('special')[0].getElementsByTagName('div')[0];
    function spe() {
        spetimer=setInterval(function () {
            var le=speL.offsetLeft;
            if(le<=-2000){
                $('.special>div').css('left','-5px');
                $('.special>div').animate({'left':'-1205px'},700);
            }else{
                $('.special>div').animate({'left':le-1200+'px'},700);
            }
        },2500)
    }
    spe();
    $('.special').mouseover(function () {
        clearInterval(spetimer);
    })
    $('.special').mouseout(function () {
        spe();
    })
    var speok=true;
    $('.special>ul li').eq(0).click(function () {
        var le=speL.offsetLeft;
        if(speok){
            speok=false;
            if(le>=-5){
                $('.special>div').css('left','-2405px');
                $('.special>div').animate({'left':'-1205px'},700);
            }else{
                $('.special>div').animate({'left':le+1200+'px'},700);
            }
            setTimeout(function () {
                speok=true;
            },700)
        }
    })
    $('.special>ul li').eq(1).click(function () {
        var le=speL.offsetLeft;
        if(speok){
            speok=false;
            if(le<=-2400){
                $('.special>div').css('left','-5px');
                $('.special>div').animate({'left':'-1205px'},700);
            }else{
                $('.special>div').animate({'left':le-1200+'px'},700);
            }
            setTimeout(function () {
                speok=true;
            },700)
        }
    })

    // 右侧固定定位TAB
    $('#tab>div').mouseover(function () {
        var ind = $(this).index();
        $('#tab .tabspan').css('left','0');
        $('#tab .tabspan').eq(ind).css('left','-50px');
    })
    $('#tab>div').mouseout(function () {
        $('#tab .tabspan').css('left','0');
    })
})

// Ajax瀑布流
    var navnav=document.getElementsByClassName('nav')[0];
    // 滚动事件
window.onscroll=function(){
    // 每次滚到到底部 就请求数据

    // 文档总高度
    var aHeight=document.documentElement.offsetHeight;
    // 可视区域高度
    var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
    // 滚动高度
    var sHeight=document.documentElement.scrollTop||document.body.scrollTop;



    // 每次滚到到底部=总高度-可视区域高度
    if(aHeight-cHeight<=sHeight+1){


        // 建立ajax请求数据
        Ajax('JSON').get('./php/index.php',function(msg){
            // 声明空格字符串
            var str='';

            //for in 遍历对象 遍历5次
            for(var i in msg) {
                str += '<div><img src="' + msg[i]["pic"] + '"><p>追风筝的人</p><p>￥27</p></div>';
            }

            // 加载高度
            if(aHeight>=15000){
                navnav.innerHTML=navnav.innerHTML;
            }else{
                navnav.innerHTML+=str;
            }
        });
    }
}

window.onscroll=function(){
    var scrH=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrH>1000){
        $('#hide').show();
        $('#hide').animate({top:'0'},300);
    }
    if(scrH<=899){
        $('#hide').hide();
        $('#hide').css('top','-50px');
    }
}