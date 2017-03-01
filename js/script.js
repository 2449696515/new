(function(){
    function changRem(){
        var scale = 1 / devicePixelRatio;  
        document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no'); 

        //flexible中定义<html>font-size
        var width = document.documentElement.getBoundingClientRect().width;  
        if (width / devicePixelRatio > 540) {  
            width = 540 * devicePixelRatio;
        }
        var rem = width / 10;
        document.documentElement.style.fontSize = rem + 'px'; 
    }
    changRem();
    var timer;
    window.addEventListener("resize",function(){
        clearInterval(timer);
        timer = setInterval(changRem, 10);
    })
})()
/*var $=require("./com/jquery-1.11.0.min.js");
 require("./com/swiper-3.3.1.min.js");
 var swiperAnimateCache= require("./com/swiper.animate1.0.2.min.js").swiperAnimateCache;
 var swiperAnimate= require("./com/swiper.animate1.0.2.min.js").swiperAnimate;
 var clearSwiperAnimate= require("./com/swiper.animate1.0.2.min.js").clearSwiperAnimate;
 var tpl=require("./tpl/tpl.string");
 $("body").before(tpl);*/
