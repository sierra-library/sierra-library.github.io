/**
 * Demo.js
 * Javascript file for Penguin library demo
 **/



$(document).ready(function(){

    /**
     * HTML escaper
     **/

    $('code').each(function(){
        var code = $(this).html();
        $(this).text(code);
    });

    
    /**
     * loading bar
     **/

    $('.js-show-hide-loading-bar').click(function(){
      showHideLoadingBar();
      return false;
    });

    function showHideLoadingBar(){
        if ($('.loading-bar').length === 0) { 
            $( 'body').append( "<div class='loading-bar'></div>" );
        }
        setTimeout(function(){ 
            $('.loading-bar').fadeOut(function(){
                $('.loading-bar').remove();
            });
        }, 3000);
    }


    /**
     * Loading spinner
     **/

    $('.js-show-hide-loading-spinner').click(function(){
      showHideLoadingSpinner();
      return false;
    });
    function showHideLoadingSpinner(){
        if ($('.loading-spinner').length === 0) { 
            $('body').append( "<div class='loading-spinner'><span></span><span></span><span></span><span></span></div>" );
        }
        setTimeout(function(){ 
            $('.loading-spinner').fadeOut(
                function(){
                    $( '.loading-spinner').remove();
            });
           
        }, 3000);
    }
});