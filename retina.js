function retina() {
  if(jQuery('.replace-2x').css('font-size') == "1px") {
		var els = jQuery("img.replace-2x").get();
		for(var i = 0; i < els.length; i++) {
			var src = els[i].src
			src = src.replace(".png", "@2x.png");
			els[i].src = src;
		}
	}
}
jQuery(document).ready(function() {
	retina();
});