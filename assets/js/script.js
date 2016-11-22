$(document).scroll(function(){
    if($(document).scrollTop()!=0){
        $("#top-nav").css('background-color','#000');
        $('#navbar').css('padding','5px','max-height','60px');
    } else {
        $("#top-nav").css('background-color','#E20036');
        $('#navbar').css('padding','20px');

    }
});
$("#case0,#case1,#case2").hover(function(){
    let el=$(this);
    el.find(".angled-rectangle").css('background-color','#ffffff');
    el.find(".angled-rectangle").css('border-color','#e20036');
    el.find(".angled-rectangle h3").css('color','#E20036');
    el.find(".subangled-rectangle").css('background-color','#e20036');
    el.find(".subangled-rectangle h4").css('color','#fff');
    el.find(".subangled-rectangle p").css('color','#fff');
    el.find(".subangled-rectangle .icon").css('color','#fff');
    el.find(".subangled-rectangle span").css('color','#fff');
}, function(){
    let el=$(this);
    el.find(".angled-rectangle").css('background-color','#e20036');
    el.find(".angled-rectangle").css('border-color','#fff');
    el.find(".angled-rectangle h3").css('color','#fff');
    el.find(".subangled-rectangle").css('background-color','#fff');
    el.find(".subangled-rectangle h4").css('color','#e20036');
    el.find(".subangled-rectangle p").css('color','#000');
    el.find(".subangled-rectangle .icon").css('color','#e20036');
    el.find(".subangled-rectangle span").css('color','#000');
});



