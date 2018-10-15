		$(document).ready(function(){
			$('#paper').zoom();
		});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("HEADER").addClass("changeColor");
    } else {
        $("HEADER").removeClass("changeColor");
    }
});

