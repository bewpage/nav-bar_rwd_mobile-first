document.addEventListener("DOMContentLoaded", function() {


        var nav = $('.header__main-nav');
        var mobileNav = $('.toggle-nav');
        var dropDownMenu = $('.header__responsive-menu');
        var hamburgerAnimation = $('#nav-icon1');

    mobileNav.on('click', function(e) {
        dropDownMenu.toggleClass('expand');
        mobileNav.toggleClass('toggle-nav-click');
        hamburgerAnimation.toggleClass('open')
        e.preventDefault();
    });


    // hide nav bar when scroll

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = nav.outerHeight();
    console.log(navbarHeight);

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        console.log('to jest st= ' + st);
        console.log('to jest lastscrolltop= ' + lastScrollTop);


        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').removeClass('f-nav-fix').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('f-nav-fix');
            }
        }

        lastScrollTop = st;
    }


});