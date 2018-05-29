$( function() {
    // init tabs
    $( ".services-tab" ).tabs();
    // init portfilio tabs
    $( ".portfolio-tab" ).tabs();
    // init reviews carousel
    $( ".reviews-carousel" ).slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    // init slicknav
    $('.header-nav').slicknav({
        appendTo: '#header .container-fluid',
        label: ''
    });
} );