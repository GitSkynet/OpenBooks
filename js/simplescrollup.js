$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 700) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 800); 
        return false; 
    }); 
});
