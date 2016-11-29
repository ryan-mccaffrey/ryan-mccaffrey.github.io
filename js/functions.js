
// Starts a konami code when document loads
$(document).ready(function() {

    // a key map of allowed keys
	var allowedKeys = {
	  37: 'left',
	  38: 'up',
	  39: 'right',
	  40: 'down',
	  65: 'a',
	  66: 'b'
	};

	// the 'official' Konami Code sequence
	var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

	// a variable to remember the 'position' the user has reached so far.
	var konamiCodePosition = 0;

	// add keydown event listener
	document.addEventListener('keydown', function(e) {
	  // get the value of the key code from the key map
	  var key = allowedKeys[e.keyCode];
	  // get the value of the required key from the konami code
	  var requiredKey = konamiCode[konamiCodePosition];

	  // compare the key with the required key
	  if (key == requiredKey) {

	    // move to the next key in the konami code sequence
	    konamiCodePosition++;

	    // if the last key is reached, activate cheats
	    if (konamiCodePosition == konamiCode.length)
	      activateCheats();
	  } else
	    konamiCodePosition = 0;
	});

	function activateCheats() {
		// window.location.replace('https://reddit.com');
		// Make the animation work if possible
		
		$('#spotify-icon').css('display', 'inline');
		$('#spotify-icon').addClass('animate infinite bounce');
	}
});


// Controls the cool animation on my name
$(document).ready(function() {

	var b = baffle('.baffle-this', {
		speed: 50,
		characters: '█/ ▒░▓><'
	});
	b.start();
	b.reveal(1000, 2000);
});

// Controls the auto updating of the navigation bar when user scrolls
// to different sections of page
$(document).ready(function() {
	// Cache selectors
	var topMenu = $("#top-menu"),
	    topMenuHeight = topMenu.outerHeight(),
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function() {
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind to scroll
	$(window).scroll(function() {
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function() {
	     if ($(this).offset().top < fromTop)
	       return this;
	   });

	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   // Set/remove active class
	   menuItems
	     .parent().removeClass("active")
	     .end().filter("[href='#"+id+"']").parent().addClass("active");
	});
});



$('.scrolldown').click(function() {

	var pSection = $(this).attr("href");

	/* get href of itself and animate scroll */
	$("html, body").animate({
		scrollTop: $(pSection).offset().top
	}, 1000, 'easeInOutExpo');

	/* Text Shadow for the title */ 
	$(pSection).addClass("active-shadow");
	setTimeout(function() { $(pSection).removeClass("active-shadow"); }, 900);

	return false;
});

$('#fa-email').click(function () { 
	
	$('#fa-email').popover('show');
	// setTimeout(function() {
	// 	$('.popover').stop(true, true).fadeTo(800, 0, function() { $('#fa-email').popover('hide'); });
	// }, 2000);
	$('.popover').stop(true, true).fadeTo(2000, 100).fadeTo(500, 0, function () { $('#fa-email').popover('hide'); });
}); 


// Takes the selected element text (where element is the ID tag) by grabbing the text 
// from the element's meta tag and copies it to the user's clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).attr('meta')).select();
  document.execCommand("copy");
  $temp.remove();
}