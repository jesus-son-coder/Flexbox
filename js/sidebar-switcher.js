
( function($) {

    // clic sur le 1er bouton de séleciton de mise en page :
    $('a.sidebar-left-toggle').click(function(){
        if(!$('.sidebar').hasClass('sidebar-left')){
            $('.sidebar').addClass('sidebar-left');
        }
    })

    // clic sur le 2ème bouton de séleciton de mise en page :
    $('a.sidebar-right-toggle').click(function(){
        if($('.sidebar').hasClass('sidebar-left')){
            $('.sidebar').removeClass('sidebar-left');
        }
    })

    // clic sur le 3ème bouton de sélection de mise en page :
    $('a.no-sidebar-toggle').click(function(){
        $('.content').toggleClass('no-sidebar');
    })

    // clic sur le 4ème bouton de sélection de mise en page :
    $('a.hide-sidebar-toggle').click(function(){
        $('.sidebar').toggleClass('hide');
    })

})( jQuery );


/*
( function( $ ) {
    
    $('a.sidebar-left-toggle').click(function() {
        if (!$('.sidebar').hasClass('sidebar-left')){
            $('.sidebar').addClass('sidebar-left');
        };
    });
    
    $('a.sidebar-right-toggle').click(function() {
        if ($('.sidebar').hasClass('sidebar-left')){
            $('.sidebar').removeClass('sidebar-left');
        };
    });
    
    $('a.no-sidebar-toggle').click(function() {
        if (!$('.content').hasClass('no-sidebar')){
            $('.content').addClass('no-sidebar');
        } else {
            $('.content').removeClass('no-sidebar');  
        };
    });
    
    $('a.hide-sidebar-toggle').click(function() {
        if (!$('.sidebar').hasClass('hide')){
            $('.sidebar').addClass('hide');
        } else {
            $('.sidebar').removeClass('hide');  
        };
    });
    
})( jQuery );
*/







