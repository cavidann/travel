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
        navText: [
        "<img class='rotate-180' src='assets/img/coolicon-right.svg'>",
            "<img src='assets/img/coolicon-right.svg'>"]
    });

    $('.tours-gallery-sc .gallery-option').click(function(){
        let _this = $(this);
        let _content = $('.tours-gallery-sc .main.content');
        _content.find('h1').html(_this.find('.name').html());
        _content.find('p').html(_this.find('.desc').html());

        $('.tours-gallery-sc .gallery-option').removeClass('active')
        _this.addClass('active')

        let selectedImgSrc = 'assets'+_this.css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "").split('assets')[1]
        $('.tours-gallery-sc .bk-img.main-img').css(
            "background",'url('+selectedImgSrc+')');

        $('.tours-gallery-sc .left-main-img').css(
            "background",'url('+selectedImgSrc+')')
    })

    $('.regions-sc .tab-head-item').click(function(){
        let _this = $(this);
        $('.regions-sc .tab-head-item').removeClass('active');
        _this.addClass('active');

        // $('.tab-body-item').hide()
       $('.tab-body-item').hide().removeClass('active')
        $('.tab-body-item[tab-index='+ _this.attr('tab-index')+']').fadeIn(300).addClass('active').show();
    })

    $('.region-map-img svg g').click(function(){
        $('.region-map-img').addClass('opened')

        let _this = $(this);
        $('.region-map-img svg g').removeClass('active');
        _this.addClass('active');
        
        $('.region-tab-list').removeClass('active')
        $('.region-tab-list[region-name='+_this.attr('region-name')+']').addClass('active')
    })
});