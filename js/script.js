document.addEventListener("DOMContentLoaded", function() {


        var nav = $('.header__main-nav');
        var mobileNav = $('.toggle-nav');
        var dropDownMenu = $('.header__responsive-menu');

    mobileNav.on('click', function(e) {
        dropDownMenu.toggleClass('expand');
        e.preventDefault();
    });


});