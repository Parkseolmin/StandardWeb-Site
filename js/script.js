//레이어 팝업
$(".layer").click(function (e) {
    e.preventDefault();
    //$("#layer").css("display","block");
    $("#layer").show();
    //$("#layer").fadeIn();
    //$("#layer").slideDown();
});
$("#layer .close").click(function (e) {
    e.preventDefault();
    //$("#layer").css("display","none");
    $("#layer").hide();
    //$("#layer").fadeOut();
    //$("#layer").slideUp();
});

//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//배너
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
//전체 메뉴
$(".tit .btn").click(function (e) {
    e.preventDefault();
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown();
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
});
