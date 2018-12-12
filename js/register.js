$(function () {
    // 判断焦点出现提示
    $('#tel').focus(function () {
        $('#tel').css('border','1px solid rgba(0,0,0,.7)');
        $('#yz').css({'display':'block','color':'#ccc'}).html("验证完成后，你可以使用该手机登录或找回密码");
    })
    $('#tel').blur(function () {
        $('#tel').css('border','1px solid #ccc');
        $('#yz').css('display','none');
    })

    //点击切换区号
    $('#adress').click(function () {
        $('#dq').toggle();
        $('#adress').css('border','1px solid rgba(0,0,0,.7)')
    })

    //点击节点以外的地方隐藏弹出框
    $(document).click(function(){
        $("#dq").hide();
        $('#adress').css('border','1px solid #ccc')
    });
    //阻止冒泡
    $("#adress").click(function(event){
        event.stopPropagation();
    });

    //点击按钮验证
    $('#btn').click(function () {
        //正则匹配手机号
        var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (reg.test($('#tel').val())) {
            $('#yz').css({'display':'block','color':'green'}).html("验证码已发送");
        } else {
            $('#yz').css({'display':'block','color':'red'}).html("格式错误");
        }
        if($('#tel').val()==""){
            $('#yz').css({'display':'block','color':'orangered'}).html("请输入手机号");
        }
    })

    //遮罩层设置
    window.onload=function () {
        $('#bar').css({"width":$(document).width(), "height":$(document).height()});
        $('#cont input').click(function () {
            $('#bar').hide();
        })
    }
})