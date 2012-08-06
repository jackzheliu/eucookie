function hwsEuCookie() {

    return {

        var firstTitle = "Cookie policy";
        var firstMessage = "We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we'll assume that you are happy to receive all cookies on the website. However, if you would like to, you can <a href=\"\">change your cookie settings at any time.</a>";
        var firstButton =  "Continue";
        var lawUrl = "blog/eu-cookie-law";


        function init() {
        	lavState = $.cookie('eu_cookie_law');
        	if (!lavState == null){
        		$('.body').prepend($('
        			top:
                    <div id="sliding-popup" class="sliding-popup-top">\
                      <div class="popup-content">\
                        <div class="popup-messages">\
                            <h2></h2>
                            <p></p>\
                        </div>\
                        <div id="popup-buttons">\
                          <button type="button" class="left-button"></button>\
                          <button type="button" class="find-more-button">More information on cookies</button>\
                        </div>\
                      </div>\
                    </div>'
                    ));
        	}
            
        	if(!lavState == null) {
                $('#sliding-popup .popup-content h2').prepend(firstTitle);
                $('#sliding-popup .popup-content p').prepend(firstMessage);
                $('#sliding-popup .popup-content p a').prepend('href://' + lawUrl);
				$('#sliding-popup .popup-content .left-button').click(function(){ 
                    $.cookie('eu_cookie_law', '1'); 
                    $('sliding-popup').remove();
                });
                $('#sliding-popup .popup-content .find-more-button').click(function(){
                    window.location.href = lawUrl;
                });             
        	 }
        }
    }
}


$(document).ready(function() {
  hwsEuCookie.init();
});
