$('.owl-carousel').owlCarousel({
    loop: true,
    items: 2,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})