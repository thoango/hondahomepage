new WOW().init();

const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$("#vehicles-list").mCustomScrollbar({
    theme: "dark"
});

function move(value) {
    $("#vehicles-list").mCustomScrollbar("scrollTo", value, {
        scrollEasing: "easeOut"
    })
}

$(".vehicles-nav ul li a").click(function () {
    if ($(this).attr("id") === "cars-nav") {
        move("#cars");
    }
})

var count = "";
$("#navbar > a").click(function () {
    if (count === "") {
        count = $(this).attr("id");
        $(this).addClass("active");

        if (count === "vehicles-link") {
            $("#vehicles").removeClass("hide-vehicles");
            $(".vehicles-nav").addClass("animate__fadeInDown");
            $("#vehicles-list").addClass("animate__fadeInUp");

        } else if (count === "tools-link") {
            $("#tools").removeClass("hide-vehicles");
        }

    } else {
        if (count === $(this).attr("id")) {
            $(this).removeClass("active");
            count = "";


            $(".vehicles-nav").addClass("animate__fadeOutUp");
            $("#vehicles-list").addClass("animate__fadeOutDown");
            setTimeout(function () {
                $("#vehicles").addClass("hide-vehicles");
                $(".vehicles-nav").removeClass("animate__fadeOutUp");
                $("#vehicles-list").removeClass("animate__fadeOutDown");
            }, 300)

            $("#tools").addClass("hide-vehicles");

        } else {
            $("#navbar > a").removeClass("active");
            count = $(this).attr("id");
            $(this).addClass("active");

            if (count != "vehicles-link") {

                $(".vehicles-nav").addClass("animate__fadeOutUp");
                $("#vehicles-list").addClass("animate__fadeOutDown");
                setTimeout(function () {
                    $("#vehicles").addClass("hide-vehicles");
                    $(".vehicles-nav").removeClass("animate__fadeOutUp");
                    $("#vehicles-list").removeClass("animate__fadeOutDown");
                }, 300)

                $("#tools").removeClass("hide-vehicles");
            } else {
                $("#vehicles").removeClass("hide-vehicles");
                $(".vehicles-nav").addClass("animate__fadeInDown");
                $("#vehicles-list").addClass("animate__fadeInUp");

                $("#tools").addClass("hide-vehicles");
            }
        }
    }
})
$("#vehicles-close").click(function () {
    $(".vehicles-nav").addClass("animate__fadeOutUp");
    $("#vehicles-list").addClass("animate__fadeOutDown");
    setTimeout(function () {
        $("#vehicles").addClass("hide-vehicles");
        $(".vehicles-nav").removeClass("animate__fadeOutUp");
        $("#vehicles-list").removeClass("animate__fadeOutDown");
    }, 300)
    $(".navbar a").removeClass("active");
    count = "";
})
$(".vehicles-product").addClass("animate__animated animate__fadeInUp");

$(".carousel-indicators-config li").click(function () {
    $(".carousel-indicators-config li").removeClass("active");
    $(this).addClass("active");
})

$(".indicators-xs-header").click(function () {
    $(".carousel-indicators-xs ol").slideToggle();

    if ($(".indicators-xs-header").hasClass("active")) {
        $(".indicators-xs-header").removeClass("active");
        $(".indicators-xs-header svg").css("transform", "rotate(0)");
    } else {
        $(".indicators-xs-header").addClass("active");
        $(".indicators-xs-header svg").css("transform", "rotate(180deg)");
    }

    // $(".indicators-xs-header svg").css("transform", "rotate(180deg");

    // if ($(".indicators-xs-header svg").hasClass("transform-rotate-0")) {
    //     $(".indicators-xs-header svg").removeClass("transform-rotate-0");
    //     $(".indicators-xs-header svg").addClass("transform-rotate-180");
    // } else {
    //     $(".indicators-xs-header svg").removeClass("transform-rotate-180");
    //     $(".indicators-xs-header svg").addClass("transform-rotate-0");
    // }
})

$(".carousel-indicators-xs ol li").click(function () {
    $(".indicators-title span").html($(this).html());
    $(".carousel-indicators-xs ol").slideUp();
})

var cnt;
$(".carousel-control-prev").click(function () {
    $(".carousel-item").each(function (i) {
        if ($(this).hasClass("active")) {
            return cnt = i;
        }
    })

    if (cnt == 0) {
        cnt = 4;
    } else {
        cnt--;
    }

    $(".carousel-indicators-config li").removeClass("active");

    $(".carousel-indicators-config li").each(function (i) {
        if (i == cnt) {
            $(this).addClass("active");
            $(".indicators-title span").html($(this).html());
        }
    })
})
$(".carousel-control-next").click(function () {
    $(".carousel-item").each(function (i) {
        if ($(this).hasClass("active")) {
            return cnt = i;
        }
    })

    if (cnt == 4) {
        cnt = 0;
    } else {
        cnt++;
    }

    $(".carousel-indicators-config li").removeClass("active");

    $(".carousel-indicators-config li").each(function (i) {
        if (i == cnt) {
            $(this).addClass("active");
            $(".indicators-title span").html($(this).html());
        }
    })
})

// var count = 0;
// $(".carousel-control-prev").click(function() {
//     $(".carousel-indicators-config li").removeClass("active");
//     if (count == 0) {
//         count = 4;
//     } else {
//         count--;
//     }

//     $(".carousel-indicators-config li").each(function(i) {
//         if (count == i) {
//             $(this).addClass("active");
//         }
//     })
// })
// $(".carousel-control-next").click(function () {
//         $(".carousel-indicators-config li").removeClass("active");
//         if (count == 4) {
//             count = 0;
//         } else {
//             count++;
//         }

//         $(".carousel-indicators-config li").each(function (i) {
//             if (count == i) {
//                 $(this).addClass("active");
//             }
//         })
//     })

$(".back-to-top").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 1000);
})

function collapse() {
    var width = $(window).width();
    if (width >= 768) {
        $(".collapse-ul").removeClass("collapse");
    } else {
        $(".collapse-ul").addClass("collapse");
    }
}

$(window).resize(function () {
    collapse();
})

$(document).ready(function () {
    collapse();
})