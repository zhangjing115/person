$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        //==========================头部================
        if(clientW<730){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
            $(".logo1").css("display","block");
            $(".web").css("display","block");
            $('.changjing').css("display","none");
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".logo1").css("display","none");
            $(".web").css("display","none");
            $('.changjing').css("display","block");


        }
    })

    $(window).resize();
    $(".son").css("display","none");
    $(".menubtn").click(function(){
        $(".son").finish();
        $(".son").slideToggle(200);
    })
    //=======================游戏========================
    $(".effect-zoe").hover(function(){
        $(this).find(".img-game").css({
            transform:"translateY(-58px)",
        })
        $(this).find(".img-game").next("figcaption").css({
            transform:"translateY(-58px)",
        })
    },function(){
        $(this).find(".img-game").css({
            transform:"translateY(0px)",
        })
        $(this).find(".img-game").next("figcaption").css({
            transform:"translateY(0px)",
        })
    })
//==============================photoshop===============
    var num=0;
    var move=function(){
        num++;
        if(num==$(".list").length-1){
            $("#box").animate({marginLeft:-num*100+"%"},function(){
                $("#box").css({marginLeft:0});
            })
            num=0;
        }else{
            $("#box").animate({marginLeft:-num*100+"%"})
        }
    }
    var t=setInterval(move,2000);
    $(".list").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,2000);
    })





//======================================ai======================
    $(".img-responsive").hover(function(){
        $(this).next(".textbox").css({
            transform:"scale(1,1)",
            transformOrigin:"center center",
        })
    },function(){
        $(this).next(".textbox").css({
           transform:"scale(0)",
       })
    })
    $(".textbox").hover(function(){
        $(this).find(".add").fadeIn(200);
    },function(){
        $(this).find(".add").fadeOut(200);
    })
    $(".list-son img").attr("data-role","animate-doudong");
    $(".info h1").attr("data-role","animate-fromRightAnim3");
    //==================================点击图片放大===============================
    var add=$(".add");
    add.click(function(){
        var clientW=$(window).width();
        var clientH=$(window).height();
        var aa=$(this).parent().parent();
        var bb=aa.find(".img-responsive").attr("src");
        $('.imgbox').css({
            display:'block',
            width:clientW,height:clientH+300,
        });
        $('.imgda').attr('src',bb).css("display","block");
    });
    add.attr("data-role","animate-rotate")
    $('.close').click(function(){
        $('.imgbox').css({display:'none'});
    });
    //================================简介雪景=========================
    //var arr=[];
    //var jianjie=$(".jianjie");
    //var jianjieW=jianjie.width();
    //var jianjieH=jianjie.height();
    //for(var i=0;i<1500;i++){
    //    var div=document.createElement("div");
    //    var lefts=10+(jianjieW-20)*Math.random();
    //    var time=3*Math.random();
    //    div.style.cssText="width:2px;height:2px;border-radius:50%;background:white;position:absolute;left:"+lefts+"px;top:-20px;transition:top 3s linear "+time+"s;-webkit-filter:blur(0.5px)";
    //    jianjie[0].appendChild(div);
    //    arr.push(div);
    //}
    //setTimeout(function(){
    //    for(var i=0;i<arr.length;i++){
    //        arr[i].style.top=jianjieH+"px";
    //        arr[i].addEventListener("webkitTransitionEnd",function(){
    //            this.style.transition="none";
    //            this.style.top="-20px";
    //            var time=3*Math.random();
    //            var that=this;
    //            setTimeout(function(){
    //                that.style.transition="top 2s linear "+time+"s";
    //                that.style.top=jianjieH+"px";
    //            },0)
    //        },false)
    //    }
    //},0)

    //=========================返回顶部==================================
    $("#top").css({
        position:'fixed',
        bottom:0,
        right:0,
    })
    var ti;
    $(window).scroll( function() {
        if($(window).scrollTop()>300){
            clearTimeout(ti);
            ti=setTimeout(function(){
                $('#top').show();
            },300);
        }else{
            clearTimeout(ti);
            $('#top').hide();
        }
    } );


    $("#top").click(function(){
        $({top: $(window).scrollTop()}).animate(
            {top: 0},
            {
                duration:900,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });

//=========================================鼠标放上旋转===========================
    $(".close").hover(function(){
        $(this).attr("data-role","animate-doudong");
        transformOrigin:"center center";
    },function(){
        $(this).removeAttr("data-role");
    })
//==========================轮播==============================
    var num1=0;
    var move1=function(){
        num1++;
        if(num1==$(".block").length-1){
            //function 完成动画要干的事
            $(".b-box").animate({marginLeft:-num1*100+"%"},function(){
                $(".b-box").css({marginLeft:0});
            })
            num1=0;
        }else{
            $(".b-box").animate({marginLeft:-num1*100+"%"})
        }
        $(".circle").css({background:"#000"});
        $(".circle").eq(num1).css({background:"white",border:"2px solid black"});
    }
    var tt=setInterval(move1,1000);

    $(".circle").click(function(){
        var index=$(this).index(".circle");
        num1=index;
        $(".b-box").animate({marginLeft:-num1*100+"%"});
        $(".circle").css({background:"#000"});
        $(".circle").eq(num1).css({background:"white",border:"2px solid black"});
    })



    $(".banner").hover(function(){
        clearInterval(tt);
    },function(){
        tt=setInterval(move1,1000);
    })

    //3d
    var els=$('.sample'),
        data=[
            {translateX:'-400px',translateZ:'-400px'},
            {translateX:'-200px',translateZ:'-200px'},
            {translateX:'0px',translateZ:'0px'},
            {translateX:'200px',translateZ:'-200px'},
            {translateX:'400px',translateZ:'-400px'}
        ],
        draw=function(){
            for(var i=0;i<els.length;i++){
                els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
            }
            data.unshift(data.pop());
        };
    draw();
    var td=setInterval( draw,2000 );

    //function zoom(a){
    //    var obj=$(a);
    //    obj.onmouseover=function(){
    //        this.style.zIndex=10;
    //    }
    //    obj.onmouseout=function(){
    //        this.style.zIndex=0;
    //    }
    //}
    //zoom(".sample");



})
