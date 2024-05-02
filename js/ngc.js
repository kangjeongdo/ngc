$(document).ready(function(){
    $('.articleList').bxSlider({
        pager: false,
        speed : 750,
        adaptiveHeightSpeed: 750,
        infiniteLoop: false,
        hideControlOnEnd: true,
        slideWidth: 562,
        slideMargin: 10,
        maxSlides: 3,
        minSlides: 1,
        touchEnabled: false
    });
    panelControl();
    toggleComponent();
    panelComponent();
    popUpShow();
    scrollChange();
    vids("#videoBox");
    gridView();
    showPass();
    giftperson();
    cardBg();
  });
function panelControl(){
    var currentPanel = null;
    $(".openBtn").click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(currentPanel).removeClass("active");
    });
}
function toggleComponent(){
    var currentToggle = null;
    $(".openField").click(function(){
        $(this).toggleClass("active");
        currentToggle = "#" + $(this).attr("data-toggle");
        $(currentToggle).toggleClass("active");
    });
}
function panelComponent(){
    var currentPanel = null;
    var panels = $("[id^='depthMenuFor']");
    var menus = $("header > div > div .openGnb");
    menus.click(function(){
        currentPanel = "#" + $(this).attr("data-gnb");
        panels.removeClass("active");
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        panels.removeClass("active");
    });
}
function popUpShow(){
    var currentPopup = null;
    $(".openPopUp").click(function(){
        currentPopup = "#" + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $(".closePopUp").click(function(){
        $(currentPopup).removeClass("active");
    });
}
function scrollChange(){
    var lastScroll = 0;
    var currentHeader = $("header");
    var currentSearch = $("#searchField");
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > lastScroll) {
            $(currentHeader).addClass('backgroundColor');
            $(currentSearch).addClass('backgroundColor');
        }
    }); 
    $(window).click(function(){
        currentHeader.addClass('backgroundColor');
        currentSearch.addClass('backgroundColor');
    });
}
function vids(target){
    $(target).fitVids();
}
function gridView(){
    var currentWay = '';
    var target = $(".gridListHandler input[type='button']");
    target.click(function(){
        target.removeClass("active");
        $(this).addClass("active");
        currentWay = $(this).val();
        $(".gridBox ul").removeClass();
        $(".gridBox ul").addClass(currentWay);
    });
}
function showPass(){
    var passwordStatus = false;
    var show = $(".p_show");
    var confirmShow = $(".p_Cshow");
    var password = $("#password");
    var createPassword = $("#create_Password");
    var confirmPassword =$("#confirm_Password");
    show.click(function(){
        passwordStatus =! passwordStatus
        if(passwordStatus == true){
            $(password).attr('type','text');
            $(createPassword).attr('type','text');
            $(this).text('HIDE');
        }else{
            $(password).attr('type','password');
            $(createPassword).attr('type','password');
            $(this).text('SHOW');
        }
    });
    confirmShow.click(function(){
        passwordStatus =! passwordStatus
        if(passwordStatus == true){
            $(confirmPassword).attr('type','text');
            $(this).text('HIDE');
        }else{
            $(confirmPassword).attr('type','password');
            $(this).text('SHOW');
        }
    });
}
function giftperson(){
    var target = $('.subscribeContainer > div:last-child > p > span');
    var cardtarget = $('.subscribeContainer > div:last-child > div div');
    target.click(function(){
        target.removeClass("active");
        $(this).addClass("active");
    });
    cardtarget.click(function(){
        cardtarget.removeClass("active");
        $(this).addClass("active");
    });
}
function cardBg(){
    $(".subscribeContainer > div:last-child form fieldset div #c_Number").keyup(function(){
        var cardNum = $(this).val().substring(0,1);
        var card = $(".subscribeContainer > div:last-child form fieldset > div:first-of-type span");

        switch(cardNum){
            case "4" :
                card.css("background-image","url('images/pic_visa_cardnumber.svg')");
                break;
            case "5" :
                card.css("background-image","url('images/pic_mastercard_cardnum.svg')");
                break;
            default:
                card.css("background-image","url('images/pic_paypal_cardnumber.svg')");
                break;
        }
    });
}
// function size(){
//     if(window.matchMedia("screen and (max-width:767px)").matches){
//         $(".list_container > div:nth-child(4) > ul").addClass("articleList");
//         console.log( $(".list_container > div:nth-child(4) > ul").addClass("articleList"))
//         console.log("작동됩니다")
//     }else{
//         $(".list_container > div:nth-child(4) > ul").addClass("")
//         console.log("작작동")
//     }
// }