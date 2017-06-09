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


});