$(function () {
    // 二维码/账户登录切换
    $('#tab_right a').click(function () {
        $(this).addClass('tab_a');
        $('#tab_left a').removeClass();
        $('#login_qr').css('display','none');
        $('#login_id').css('display','block');
    })
    $('#tab_left a').click(function () {
        $(this).addClass('tab_a');
        $('#tab_right a').removeClass();
        $('#login_id').css('display','none');
        $('#login_qr').css('display','block');
    })

    // 判断是否输入用户名和密码
    $('#loginname').blur(function () {
        var user=$('#loginname').val();
        if(user==""){
            $('#err').css('display','block');
            $('#err').html("请输入用户名");
            $('.name label').css({'background-position':'0 -96px','border':'1px solid rgba(255,0,0,.5)'});
            $('#loginname').css('border','1px solid rgba(255,0,0,.5)');
        }else{
            $('#err').css('display','none');
            $('.name label').css({'background-position':'0 0','border':'1px solid #ccc'});
            $('#loginname').css('border','1px solid #ccc');
        }
    })
    $('#loginpwd').blur(function () {
        var pwd=$('#loginpwd').val();
        if(pwd==""){
            $('#err').css('display','block');
            $('#err').html("请输入密码");
            $('.pwd label').css({'background-position':'-48px -96px','border':'1px solid rgba(255,0,0,.5)'});
            $('#loginpwd').css('border','1px solid rgba(255,0,0,.5)');
        }else{
            $('#err').css('display','none');
            $('.pwd label').css({'background-position':'-48px 0','border':'1px solid #ccc'});
            $('#loginpwd').css('border','1px solid #ccc');
        }
    })

    // Ajax验证用户名是否存在
    $('#sub').click(function () {
        $.post("php/login.php",'value='+$("#loginname").val(),function(msg){
            if(msg=='y'){
                $('#err').css({'display':'block','background':'rgba(0,200,0,.3)','border':'1px solid green','color':'black'});
                $('#err').html("输入正确");
            }else{
                $('#err').css({'display':'block','background':'#ffebeb','border':'1px solid rgba(255,0,0,.2)','color':'red'});
                $('#err').html("输入有误");
            }
        })

    })
})