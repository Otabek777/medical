$(".categories__ul h6").click(function() {
    $(this).toggleClass("active")
});
$(".accordion__down").click(function() {
    $(this).toggleClass("open");
});
$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header").removeClass("active");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        },300);
    } else {
        $(".header").addClass("active");
        $(".header__burgir").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        },300);
    };    
});
$(".modal-open").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("opacity");
    }, 1);
});
$(".modal__close").click(function() {
    $(".modal").removeClass("opacity");
    setTimeout(function() {
        $(".modal").removeClass("active");
    }, 300);
});