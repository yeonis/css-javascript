(function(window) {
document.addEventListener("DOMContentLoaded",function() {
    $(".owl-carousel").owlCarousel({
        loop:true,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 1000,
        dots: false,
        nav:false,
        responsive: {
            0: {
                items:1
            }
        }
    });
});
})();