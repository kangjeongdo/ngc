$(document).ready(function () {
  $(".articleList").bxSlider({
    pager: false,
    speed: 1000,
    adaptiveHeightSpeed: 750,
    infiniteLoop: false,
    hideControlOnEnd: true,
    slideWidth: 562,
    slideMargin: 10,
    maxSlides: 3,
    minSlides: 1,
    auto: true,
    touchEnabled: false,
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
  font(".list_Travel > div:first-child ol li");
  list();
  btnTop();
  ani();
});
function list() {
  var currentList = null;
  var list = $("[id^='listfor']");
  var listactive = $(".list_Travel > div:first-child > ol li");
  var change = $(".list_Travel > div:first-child h2");
  $(".openList").click(function () {
    var font = $(this).text();
    listactive.removeClass("active");
    list.removeClass("active");
    $(this).addClass("active");
    currentList = "#" + $(this).attr("data-list");
    $(currentList).addClass("active");
    $(change).text(font);
  });
}
function ani() {
  var context = $(".indexContainer > div:first-child div");
  var offset_arr = [];
  var rightoffset_arr = [];
  var div2 = $(".list_container > div:nth-child(2) > div");
  var div4 = $(".list_container > div:nth-child(4) > div");
  var div4img = $(".list_container > div:nth-child(4) > ul");
  var div2img = $(".list_container > div:nth-child(2) > img");
  var showleft = $(".showArticle > div:first-child").toArray();
  var text = $(".list_container div:nth-child(3) > *");
  var oneright = $(".oneArticle> div").toArray();
  var oneimg = $(".oneArticle> img").toArray();
  var showimg = $(".showArticle > .bx-wrapper").toArray();
  var oneleft = $(".indexContainer > div:nth-child(11) > div");
  var oneleftimg = $(".indexContainer > div:nth-child(11) > img");
  var div3 = $(".indexContainer > div:nth-child(3)");
  var div5 = $(".indexContainer > div:nth-child(5) > *:not('div')");
  $(showleft).each(function () {
    offset_arr.push($(this).offset());
  });
  $(oneright).each(function () {
    rightoffset_arr.push($(this).offset());
  });
  $(window)
    .on("scroll", function () {
      var scroll = $(document).scrollTop();
      var oneoffest = oneleft.offset();
      var div2offset = div2.offset();
      var div3offset = div3.offset();
      var div4offset = div4.offset();
      var div5offset = div5.offset();
      var coffset = context.offset();
      var textoffset = text.offset();
      if ($(".indexContainer").length) {
        if (scroll >= parseInt(coffset.top) - 500) {
          $(context).addClass("slideUp");
        } else {
          $(context).removeClass("slideUp");
        }
        if (scroll >= parseInt(div3offset.top) - 700) {
          $(div3).addClass("slideUp");
        } else {
          $(div3).removeClass("slideUp");
        }
        if (scroll >= parseInt(div5offset.top) - 700) {
          $(div5).addClass("slideUp");
        } else {
          $(div5).removeClass("slideUp");
        }
        if (scroll <= offset_arr[0].top - 700) {
          $(showleft[0]).removeClass("leftSlide");
          $(showimg[0]).removeClass("slideUp");
        } else {
          $(showleft[0]).addClass("leftSlide");
          $(showimg[0]).addClass("slideUp");
        }
        if (scroll <= offset_arr[1].top - 750) {
          $(showleft[1]).removeClass("leftSlide");
          $(showimg[1]).removeClass("slideUp");
        } else {
          $(showimg[1]).addClass("slideUp");
          $(showleft[1]).addClass("leftSlide");
        }
        if (scroll <= offset_arr[2].top - 750) {
          $(showimg[2]).removeClass("slideUp");
          $(showleft[2]).removeClass("leftSlide");
        } else {
          $(showimg[2]).addClass("slideUp");
          $(showleft[2]).addClass("leftSlide");
        }
        if (scroll <= offset_arr[3].top - 700) {
          $(showimg[3]).removeClass("slideUp");
          $(showleft[3]).removeClass("leftSlide");
        } else {
          $(showimg[3]).addClass("slideUp");
          $(showleft[3]).addClass("leftSlide");
        }
        if (scroll <= rightoffset_arr[0].top - 620) {
          $(oneright[0]).removeClass("rightSlide");
          $(oneimg[0]).removeClass("slideUp");
        } else {
          $(oneimg[0]).addClass("slideUp");
          $(oneright[0]).addClass("rightSlide");
        }
        if (scroll <= rightoffset_arr[1].top - 600) {
          $(oneright[1]).removeClass("rightSlide");
          $(oneimg[1]).removeClass("slideUp");
        } else {
          $(oneimg[1]).addClass("slideUp");
          $(oneright[1]).addClass("rightSlide");
        }
        if (scroll <= rightoffset_arr[2].top - 600) {
          $(oneright[2]).removeClass("rightSlide");
          $(oneimg[2]).removeClass("slideUp");
        } else {
          $(oneimg[2]).addClass("slideUp");
          $(oneright[2]).addClass("rightSlide");
        }
        if (scroll <= parseInt(oneoffest.top) - 700) {
          $(oneleft).removeClass("leftSlide");
          $(oneleftimg).removeClass("rightSlide");
        } else {
          $(oneleft).addClass("leftSlide");
          $(oneleftimg).addClass("rightSlide");
        }
      } else {
      }
      if ($(".list_container").length) {
        if (scroll <= textoffset.top - 500) {
          $(text).removeClass("show");
        } else {
          $(text).addClass("show");
        }
        if (scroll <= offset_arr[0].top - 500) {
          $(showleft[0]).removeClass("leftSlide");
          $(showimg[0]).removeClass("slideUp");
        } else {
          $(showleft[0]).addClass("leftSlide");
          $(showimg[0]).addClass("slideUp");
        }
        if (scroll <= rightoffset_arr[0].top - 400) {
          $(oneright[0]).removeClass("rightSlide");
          $(oneimg[0]).removeClass("slideUp");
        } else {
          $(oneimg[0]).addClass("slideUp");
          $(oneright[0]).addClass("rightSlide");
        }
        if (scroll >= parseInt(div2offset.top) - 400) {
          $(div2).addClass("leftSlide");
          $(div2img).addClass("rightSlide");
        } else {
          $(div2).removeClass("leftSlide");
          $(div2img).removeClass("rightSlide");
        }
        if (scroll >= parseInt(div4offset.top) - 400) {
          $(div4).addClass("leftSlide");
          $(div4img).addClass("rightSlide");
        } else {
          $(div4).removeClass("leftSlide");
          $(div4img).removeClass("rightSlide");
        }
      } else {
      }
    })
    .scroll();
}
function font(btn) {
  $(btn).click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
}
function panelControl() {
  var currentPanel = null;
  $(".openBtn").click(function () {
    currentPanel = "#" + $(this).attr("data-panel");
    $(currentPanel).addClass("active");
  });
  $(".closeBtn").click(function () {
    $(currentPanel).removeClass("active");
  });
}
function toggleComponent() {
  var currentToggle = null;
  $(".openField").click(function () {
    $(this).toggleClass("active");
    currentToggle = "#" + $(this).attr("data-toggle");
    $(currentToggle).toggleClass("active");
  });
}
function panelComponent() {
  var currentPanel = null;
  var panels = $("[id^='depthMenuFor']");
  var menus = $("header > div > div .openGnb");
  menus.click(function () {
    currentPanel = "#" + $(this).attr("data-gnb");
    panels.removeClass("active");
    $(currentPanel).addClass("active");
  });
  $(".closeBtn").click(function () {
    panels.removeClass("active");
  });
}
function btnTop() {
  $(".btnTop > img").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".btnTop > img").fadeIn();
    } else {
      $(".btnTop > img").fadeOut();
    }
  });
  $(".btnTop > img").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
}
function popUpShow() {
  var currentPopup = null;
  $(".openPopUp").click(function () {
    currentPopup = "#" + $(this).attr("data-popup");
    $(currentPopup).addClass("active");
  });
  $(".closePopUp").click(function () {
    $(currentPopup).removeClass("active");
  });
}
function scrollChange() {
  var lastScroll = 0;
  var currentHeader = $("header");
  var currentSearch = $("#searchField");
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScroll) {
      $(currentHeader).addClass("up");
      $(currentSearch).addClass("up");
    } else {
      $(currentHeader).removeClass("up");
      $(currentSearch).removeClassClass("up");
    }
  });
  $(window).click(function () {
    currentHeader.addClass("backgroundColor");
    currentSearch.addClass("backgroundColor");
  });
}
function vids(target) {
  $(target).fitVids();
}
function gridView() {
  var currentWay = "";
  var target = $(".gridListHandler input[type='button']");
  target.click(function () {
    target.removeClass("active");
    $(this).addClass("active");
    currentWay = $(this).val();
    $(".gridBox ul").removeClass();
    $(".gridBox ul").addClass(currentWay);
  });
}
function showPass() {
  var passwordStatus = false;
  var show = $(".p_show");
  var confirmShow = $(".p_Cshow");
  var password = $("#password");
  var createPassword = $("#create_Password");
  var confirmPassword = $("#confirm_Password");
  show.click(function () {
    passwordStatus = !passwordStatus;
    if (passwordStatus == true) {
      $(password).attr("type", "text");
      $(createPassword).attr("type", "text");
      $(this).text("HIDE");
    } else {
      $(password).attr("type", "password");
      $(createPassword).attr("type", "password");
      $(this).text("SHOW");
    }
  });
  confirmShow.click(function () {
    passwordStatus = !passwordStatus;
    if (passwordStatus == true) {
      $(confirmPassword).attr("type", "text");
      $(this).text("HIDE");
    } else {
      $(confirmPassword).attr("type", "password");
      $(this).text("SHOW");
    }
  });
}
function giftperson() {
  var target = $(".subscribeContainer > div:last-child > p > span");
  var cardtarget = $(".subscribeContainer > div:last-child > div div");
  target.click(function () {
    target.removeClass("active");
    $(this).addClass("active");
  });
  cardtarget.click(function () {
    cardtarget.removeClass("active");
    $(this).addClass("active");
  });
}
function cardBg() {
  $(".subscribeContainer > div:last-child form fieldset div #c_Number").keyup(
    function () {
      var cardNum = $(this).val().substring(0, 1);
      var card = $(
        ".subscribeContainer > div:last-child form fieldset > div:first-of-type span"
      );

      switch (cardNum) {
        case "4":
          card.css("background-image", "url('images/pic_visa_cardnumber.svg')");
          break;
        case "5":
          card.css(
            "background-image",
            "url('images/pic_mastercard_cardnum.svg')"
          );
          break;
        default:
          card.css(
            "background-image",
            "url('images/pic_paypal_cardnumber.svg')"
          );
          break;
      }
    }
  );
}
