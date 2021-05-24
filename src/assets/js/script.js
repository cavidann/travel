/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
$(document).ready(function(){
    $('.one-slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        margin: 0,
        drag: true,
        navText: [
        "<img src='assets/img/white_chevron_left.svg'>",
            "<img src='assets/img/white_chevron_right.svg'>"]
    });

    $('.four-slide').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        margin: 24,
        drag: true,
        // navText: [
        // "<img src='assets/img/white_chevron_left.svg'>",
        //     "<img src='assets/img/white_chevron_right.svg'>"]
    });
});