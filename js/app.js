$(document).ready(function () {
		doIntro();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
		{'left': '300px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '-212px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position
	});

	$(document).keydown(function( event ) { if (event.keyCode == 88 )    {
	   playCool();
       $('.ryu-still').hide();
       $('.ryu-ready').hide();
       $('.ryu-throwing').hide();
       $('.ryu-cool').show();
   }});
	$(document).keyup(function( event ) { if (event.keyCode == 88 )    {
	   stopCool();
       $('.ryu-still').show();
       $('.ryu-cool').hide();
   }});
});
function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#theme-song')[0].pause();
    // $('#cool')[0].load()
    $('#cool')[0].play();
  }
}
function stopCool() {
	$('#cool')[0].pause();
	$('#cool')[0].load();
}
function doIntro() {
  $('#theme-song')[0].volume = 0.3;
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.ori').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}