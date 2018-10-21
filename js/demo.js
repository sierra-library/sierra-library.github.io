/**
 * Demo.js
 * Javascript file for Penguin library demo
 **/



$(document).ready(function(){

    /**
     * Tabs
     **/

    $('.js-tab').click(function(){
      $('.js-tab').removeClass('is-selected');
      $(this).addClass('is-selected');
      return false;
    })

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
        if ($('.loadingBar').length === 0) {
            $( 'body').append( "<div class='loadingBar'></div>" );
        }
        setTimeout(function(){
            $('.loadingBar').fadeOut(function(){
                $('.loadingBar').remove();
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
        if ($('.loadingSpinner').length === 0) {
            $('body').append( "<div class='loadingSpinner'><span class=\"loadingSpinner-inner\"></span><span class=\"loadingSpinner-inner\"></span><span class=\"loadingSpinner-inner\"></span><span class=\"loadingSpinner-inner\"></span></div>" );
        }
        setTimeout(function(){
            $('.loadingSpinner').fadeOut(
                function(){
                    $( '.loadingSpinner').remove();
            });

        }, 3000);
    }
});
