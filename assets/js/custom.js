$(function() {
	parallaxScroll()
	activeMenuElement()
});

function parallaxScroll(){
	$(window).scroll(function(){
		var top = this.pageYOffset;
		var layers = document.getElementsByClassName("parallax_layer");
		var layer, speed, yPos;

		for( var i = 0 ; i < layers.length ; i++ ){
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
		}
	})
}


function activeMenuElement(){
	var menuElements = $('.nav_bar li');

	$('.nav_bar li').click(function(){
		$(menuElements).removeClass('active')
		$(this).addClass('active')
	});
}
