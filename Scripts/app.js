

//IFFE
(function(){
    
    "use strict"
    let topoffset = 50; // var for top height
    let slideqty = $('#featured .item').length;
    let wheight = $(window).height(); //get the height of the window
    let randSlide = Math.floor(Math.random()*slideqty);

    $('#featured .item').eq(randSlide).addClass('active');

    console.log(randSlide);

    //replace img inside a carosel with bg

    //replace IMG inside carousels with a background image
    $('#featured .item img').each(function() {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url('+imgSrc+')'});
        $(this).remove();
    });


    // adust height of fullheight elements on winow resize;

    $(window).resize(function(){
        wheight = $(window).height(); //get the height of the window
        $('.fullheight').css('height',wheight); //set to the window
    });

    $('.fullheight').css('height',wheight); // set the window to 
    // activate scroll spy
    $('body').scrollspy({
        target:'header .navbar',
        offset:topoffset
    });
    
     let hash = $(this).find('li.active a').attr('href');
        if(hash !=='#featured'){
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
            // Add an inbody class to nav when scrollspy event fires
        $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
            var hash = $(this).find('li.active a').attr('href');
            if(hash !== '#featured') {
            $('header nav').addClass('inbody');
            } else {
            $('header nav').removeClass('inbody');
            }
        });

        
        //Use smooth scrolling when clicking on navigation
            $('.navbar a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') === 
                this.pathname.replace(/^\//,'') && 
                location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                    scrollTop: target.offset().top-topoffset+2
                    }, 500);
                    return false;
                } //target.length
                } //click function
            }); //smooth scrolling


            // automatically generate a  carsousel indicators

            for (var i=0; i < slideqty; i++) {
            var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
            if (i === randSlide) {
            insertText += ' class="active" ';
            }
            insertText += '></li>';
            $('#featured ol').append(insertText);
        }

        /*First Sliders */
        $('.carousel').carousel({
        
        pause: false
        });



})();