$(document).ready(function () {
    function calculateImageSize() {
        var $img = $(".dimensions img");
        var $container = $img.parent();

        var containerWidth = $container.width();
        var containerHeight = $container.height();

        var naturalWidth = $img[0].naturalWidth;
        var naturalHeight = $img[0].naturalHeight;

        // حساب النسبة
        var widthRatio = containerWidth / naturalWidth;
        var heightRatio = containerHeight / naturalHeight;
        var scale = Math.min(widthRatio, heightRatio);

        // العرض والارتفاع بعد التحجيم
        var fittedWidth = naturalWidth * scale;
        var fittedHeight = naturalHeight * scale;


        $(".screen-dimensions").css({ "width": fittedWidth + 'px', "height": fittedHeight + 'px' })
        $(".num").css({ "width": (fittedWidth * (46.63 / 1080)) + 'px ',"padding":"0px"})

        // حساب حجم الخط بناءً على أصغر بُعد
        var minDimension = Math.min(fittedWidth, fittedHeight);
        var fontSize = minDimension ;

        $(".hero .hero-title").css("font-size", (fontSize * .07) + 'px');
        $(".hero p").css("font-size", (fontSize * .036635) + 'px');
        $(".hero button").css("font-size", (fontSize * .036) + 'px');
        $(".reyada-ar p").css("font-size", (fontSize * .0326) + 'px');
        $(".wakeel-ar p").css("font-size", (fontSize * .035) + 'px');
        $(".nashr-ar p").css("font-size", (fontSize * .032) + 'px');
        $(".elketaab-ar p").css("font-size", (fontSize * .032) + 'px');
        $(".digital-ar p").css("font-size", (fontSize * .032) + 'px');
        $(".door-ar p").css("font-size", (fontSize * .035) + 'px');
        $(".ar-section .mid-title").css("font-size", (fontSize * .057) + 'px');
        $(".ar-section .goal-box p").css("font-size", (fontSize * .027) + 'px');
        $(".ar-section .center-goal-box p").css("font-size", (fontSize * .023) + 'px');
        $(".ar-section .goal-row .mid-title").css("font-size", (fontSize * .04) + 'px');
        $(".wakeel-ar .center-goal-box p").css("font-size", (fontSize * .021) + 'px');
        $(".elketaab-ar .goal-box p").css("font-size", (fontSize * .024) + 'px');
        $(".elketaab-ar .center-goal-box p").css("font-size", (fontSize * .021) + 'px');
        $(".door-ar .goal-box p").css("font-size", (fontSize * .022) + 'px');
        $(".ar-section .goal-box .num").css("font-size", (fontSize * .025) + 'px');
        $(".elketaab-f-p").css("font-size", (fontSize * .021) + 'px');
    }

    // أول مرة لما الصفحة تتحمل
    calculateImageSize();

    // لما يحصل تغيير في حجم الشاشة
    $(window).on('resize', function () {
        calculateImageSize();
    });


    // screens and button

    // menu

    $(".hero .ar-btn").click(function () {
        $("section ").fadeOut(700);
        $(".menu-ar").fadeIn(800);
    })

    // back btn
    $(".menu .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".hero").fadeIn(800);
    })

    $(".ar-section .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".menu-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
    })

    // open section

    $(".menu-btn").click(function () {
        let pageTarget = $(this).attr("target")
        $("section").fadeOut(700);
        $("." + pageTarget).fadeIn(800);
    })

    $(".next-btn button").click(function () {
        $("section").fadeOut(700);
        $(".elketaab2").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
    })

    $(".prev-btn button").click(function () {
        $("section").fadeOut(700);
        $(".elketaab").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
    })


    $('video').on('play', function () {
        // وقف كل الفيديوهات الأخرى
        $('video').not(this).each(function () {
            this.pause();
        });
    });
});
