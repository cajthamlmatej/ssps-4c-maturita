
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 100
                }, 800);
                return false;
            }
        }
    });

    $("#show-nav").click(function()  {
        let showNavIcon = $("#show-nav i");
        console.log(showNavIcon.hasClass("fa-bars"));

        if(showNavIcon.hasClass("fa-bars")) {
            showNavIcon.removeClass("fa-bars");
            showNavIcon.addClass("fa-times")
        } else {
            showNavIcon.removeClass("fa-times")
            showNavIcon.addClass("fa-bars");
        }

        $("#nav").slideToggle(500);
    });
});