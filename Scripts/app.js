

//IFFE
(function(){
    
    "use strict"
    let topoffset = 50; // var for top height
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
   

   

    /*First Sliders */
    $('.carousel').carousel({
    interval: false
    });



})();