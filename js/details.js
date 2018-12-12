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


    // 放大镜
    var wrap=document.getElementById('wrap'),
        sm=document.getElementById('small'),
        bg=document.getElementById('big'),
        move=document.getElementById('move'),
        smi=document.getElementById('smi'),
        bgi=document.getElementById('bgi');

    sm.onmouseover=function(){
        move.style.display='block';
        bg.style.display='block';
        move.style.width=bg.offsetWidth/bgi.offsetWidth*sm.offsetWidth+'px';
        move.style.height=bg.offsetHeight/bgi.offsetHeight*sm.offsetHeight+'px';
    }

    sm.onmouseout=function(){
        move.style.display='none';
        bg.style.display='none';
    }

    sm.onmousemove=function(e){
        var e=e||window.event;
        var mx=e.pageX-wrap.offsetLeft-move.offsetWidth/2,
            my=e.pageY-wrap.offsetTop-move.offsetHeight/2;

        if(mx<0){
            mx=0;
        }else if(mx>sm.offsetWidth-move.offsetWidth){
            mx=sm.offsetWidth-move.offsetWidth;
        }

        if(my<0){
            my=0
        }else if(my>sm.offsetHeight-move.offsetHeight){
            my=sm.offsetHeight-move.offsetHeight;
        }

        move.style.left=mx+'px';
        move.style.top=my+'px';

        bgi.style.left=-mx*bgi.offsetWidth/smi.offsetWidth+'px';
        bgi.style.top=-my*bgi.offsetHeight/smi.offsetHeight+'px';
    }

    // var pic=document.getElementById('pic'),
    //     lis=pic.getElementsByTagName('li');
    //
    // for(var i=0;i<lis.length;i++){
    //     lis[i].value=i+1;
    //     lis[i].onclick=function(){
    //         smi.src='img/'+this.value+'.jpg';
    //         bgi.src='img/'+this.value+'.jpg';
    //     }
    // }
    $('#lis li').mouseover(function () {
        var index=$(this).index()+1;
        $('#smi').attr('src','./img/lam'+index+'.jpg');
        $('#bgi').attr('src','./img/lam'+index+'.jpg');
        $(this).css('outline','2px solid red').siblings().css('outline','none');
    })
    
    // 售卖城市鼠标事件
    $('.check span,.check-con').mouseover(function () {
        $('.check-con').show();
    })
    $('.check span,.check-con').mouseout(function () {
        $('.check-con').hide();
    })
})

