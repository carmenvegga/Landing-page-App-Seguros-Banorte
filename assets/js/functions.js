/*global jQuery */
/* Contents
// ------------------------------------------------>

*/
(function($) {
    "use strict";

    /* ------------------  Background INSERT ------------------ */

    var $bgSection = $(".bg-section");
    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    /* ------------------ HEADER AFFIX ------------------ */

    var $navAffix = $(".header-fixed .navbar-fixed-top");
    $navAffix.affix({
        offset: {
            top: 50
        }
    });


    /* ------------------  AJAX CAMPAIGN MONITOR  ------------------ */

    $('#campaignmonitor').submit(function(e) {
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function(data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
                }
            });
    });



    /* ------------------  SCROLL TO ------------------ */

    var $Ascroll = $('a[data-scroll="scrollTo"]');
    $Ascroll.on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    /* ------------------ NAV SPLIT ------------------ */

    var $section = $('.section'),
        $bodyScroll = $('.body-scroll');
    if ($bodyScroll.length > 0) {
        $(window).on("scroll", function() {
            $section.each(function() {
                var sectionID = $(this).attr("id"),
                    sectionTop = $(this).offset().top - 100,
                    sectionHight = $(this).outerHeight(),
                    wScroll = $(window).scrollTop(),
                    $navHref = $("a[href='#" + sectionID + "']"),
                    $nav = $('.nav-split').find($navHref).parent();
                if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                    $nav.addClass('active');
                    $nav.siblings().removeClass('active');
                }
            });
        });
    }


    /* ------------------  WOW ANIMATED ------------------ */

    var wow = new WOW({

        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 50, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)

    });

    wow.init();


    /* ------------------  COLOR SWITCHER ------------------ */

    var $gearCheck = $(".gear-check"),
        $colorOption = $(".color-options"),
        $colorOptionUl = $(".color-options ul li");

    $gearCheck.on("click", function() {
        $colorOption.toggle();
    });


    $colorOptionUl
        .eq(0).css("backgroundColor", "#2196f3").end()
        .eq(1).css("backgroundColor", "#ff5722").end()
        .eq(2).css("backgroundColor", "#512da8").end()
        .eq(3).css("backgroundColor", "#222222").end()
        .eq(4).css("backgroundColor", "#859596").end()
        .eq(5).css("backgroundColor", "#1abc9c").end()
        .eq(6).css("backgroundColor", "#3498db").end()
        .eq(7).css("backgroundColor", "#27ae60").end()
        .eq(8).css("backgroundColor", "#f39c12").end()
        .eq(9).css("backgroundColor", "#d2527f").end()
        .eq(10).css("backgroundColor", "#8e44ad").end()
        .eq(11).css("backgroundColor", "#c0392b").end();

    $colorOptionUl.on("click", function() {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
}(jQuery));
