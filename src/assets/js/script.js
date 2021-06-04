/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
$(window).on("load", function () {

    $(".loader-outer").fadeOut(1000)
})

$(document).ready(function () {
    $('.one-slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        margin: 0,
        // drag: true,
        navText: ["<img src='assets/img/white_chevron_left.svg'>", "<img src='assets/img/white_chevron_right.svg'>"],
        responsive: {
            0: {
                nav:false,
                mouseDrag:false,
                touchDrag: true
            },
            991: {
                nav:true,
                mouseDrag:true,
                touchDrag: false
            }
        }
    });

    $('.four-slide').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        margin: 24,
        // drag: true,
        navText: ["<img class='rotate-180 right-orange-icon' src='assets/img/coolicon-right-orange.svg'>", "<img class='right-orange-icon' src='assets/img/coolicon-right-orange.svg'>"],

        responsive: {
            0: {
                items: 2,
                margin: 11,
                mouseDrag:false,
                touchDrag: true
            },
            600: {
                items: 3,
                margin: 11,
                mouseDrag:false,
                touchDrag: true
            },
            1000: {
                items: 4,
                margin: 24,
                mouseDrag:true,
                touchDrag: false
            }
        }
    });

    $('.tours-gallery-sc .gallery-option').click(function () {
        let _this = $(this);
        let _content = $('.tours-gallery-sc .main.content');
        _content.find('h1').html(_this.find('.name').html());
        _content.find('p').html(_this.find('.desc').html());

        $('.tours-gallery-sc .gallery-option').removeClass('active')
        _this.addClass('active')

        let selectedImgSrc = 'assets' + _this.css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, "").split('assets')[1]
        $('.tours-gallery-sc .bk-img.main-img').css(
            "background", 'url(' + selectedImgSrc + ')');

        $('.tours-gallery-sc .left-main-img').css(
            "background", 'url(' + selectedImgSrc + ')')
    })

    $('.regions-sc .tab-head-item').click(function () {
        let _this = $(this);
        $('.regions-sc .tab-head-item').removeClass('active');
        _this.addClass('active');

        // $('.tab-body-item').hide()
        $('.tab-body-item').hide().removeClass('active')
        $('.tab-body-item[tab-index=' + _this.attr('tab-index') + ']').fadeIn(300).addClass('active').show();
    })

    $('.region-map-img svg g').click(function () {
        if(!$(this).hasClass('map-opened')){
            $(this).addClass('map-opened');
            $('.region-map-img').addClass('opened')
    
            let _this = $(this);
            $('.region-map-img svg g').removeClass('active');
            _this.addClass('active');
    
            $('.region-tab-list').removeClass('active');
            $('.region-tab-list[region-name=' + _this.attr('region-name') + ']').addClass('active')
        } else {
            $(this).removeClass('map-opened');
            $('.region-map-img').removeClass('opened');
            $('.region-map-img svg g').removeClass('active');
            $('.region-tab-list').removeClass('active');
        }
    })

    $('.region-tab-close').click(function(){
        $('.region-map-img').removeClass('opened')
        $('.region-tab-list').removeClass('active')
    })

    $('.selected-lang').click(function(){
        $('.lang-dropdown').slideToggle()
    })
    $('.lang-item').click(function(){
        $('.lang-dropdown').slideUp();
        $('.selected-lang span').html($(this).html())
        
    })

    $(document).on("click", function(event){
        var $trigger = $(".lang-select");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".lang-dropdown").slideUp("fast");
        }            
    });

    $('.hamburger').click(function(){
        $('nav').addClass('opened');
        $('.bk-layout').addClass('active');
    })
    $('.bk-layout').click(function(){
        $('nav').removeClass('opened');
        $(this).removeClass('active')
    })
    $('.close-menu').click(function(){
        $('nav').removeClass('opened')
        $('.bk-layout').removeClass('active');
    })

    $('.region-tab-list .region-name').click(function(){
        $('.region-tab-list .content').removeClass('opened')
        $(this).parent().find('.content').toggleClass('opened')
    })
});