
window.sr = ScrollReveal();
// Navbar Animations
sr.reveal('.navbar', {
    duration: 900,
    delay: 300,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.h1-header', {
    duration: 2000,
    delay: 300,
});
sr.reveal('.btnMain', {
    duration: 2000,
    delay: 300,
});
sr.reveal('.h3-header', {
    duration: 2000,
    delay: 300,
});

sr.reveal('.fish', {
    duration: 700,
    delay: 300,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.heading', {
    duration: 2000,
    delay: 300,
});


$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});