(function($){
  
  $.fn.hwsEuCookie = function() {
    
    var defaults = {
        firstTitle: "Cookie policy",
        firstMessage: "We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we'll assume that you are happy to receive all cookies on the website. However, if you would like to, you can <a href=\"\">change your cookie settings at any time.</a>",
        firstButton: "Continue",
        lawUrl: "eu-cookie-law",
    };

    return this.each(function(options) {
      settings = $.extend({}, defaults, options || {});
      
      lavState = $.cookie('eu_cookie_law');
      if(!lavState) {
          $(this).prepend(
              '<div id="sliding-popup" class="sliding-popup-top">\
                <div class="popup-content">\
                  <div class="popup-messages">\
                      <h2></h2>\
                      <p></p>\
                  </div>\
                  <div id="popup-buttons">\
                    <button type="button" class="left-button"></button>\
                    <button type="button" class="find-more-button">More information on cookies</button>\
                  </div>\
                </div>\
              </div>'
          );
      }
      if(!lavState) {
        console.log(options);
        $('#sliding-popup .popup-content h2').html(options.firstTitle);
        $('#sliding-popup .popup-content p').html(settings.firstMessage);
        $('#sliding-popup .popup-content p a').attr('href', settings.lawUrl);
        $('#sliding-popup .popup-content .left-button').html(settings.firstButton);
        $.cookie('eu_cookie_law', 1);
        $('#sliding-popup .popup-content .left-button').click(function(){
            $.cookie('eu_cookie_law', 1);
            $('#sliding-popup').fadeOut();
        }); 
        $('#sliding-popup .popup-content .find-more-button').click(function(){
            window.location.pathname = settings.lawUrl;
        });
      }
        
    });

  };

})(jQuery);

$(document).ready(function() {
    $("body").hwsEuCookie({lawUrl: "blog/eu-cookie-law"});
});
