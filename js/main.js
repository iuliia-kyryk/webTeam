$(document).ready(function () {
    topScroll();
});

$(window).scroll(function () {
    topScroll();
});

function topScroll() {
    if ($(window).scrollTop() > $('.navbar').height()) {
        $('.navbar').addClass('nav-bar-scroll');
        $('.nav-link').addClass('nav-link-scroll');
        $('.navbar-brand').addClass('navbar-brand-scroll');
        $('.navbar-toggler').addClass('navbar-toggler-scroll');
    } else {
        $('.navbar').removeClass('nav-bar-scroll')
        $('.nav-link').removeClass('nav-link-scroll');
        $('.navbar-brand').removeClass('navbar-brand-scroll');
        $('.navbar-toggler').removeClass('navbar-toggler-scroll');
    }
}