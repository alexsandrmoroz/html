/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow_slider_l': '&#xe912;',
		'icon-arrow_slider_r': '&#xe913;',
		'icon-arrow_left_card': '&#xe914;',
		'icon-arrow_right_card': '&#xe915;',
		'icon-heart_card': '&#xe911;',
		'icon-icon_post_prem': '&#xe906;',
		'icon-icon_phone_prem': '&#xe907;',
		'icon-icon-1-2': '&#xe90d;',
		'icon-Polygon-1': '&#xe910;',
		'icon-noun_cart_3566228-2': '&#xe90f;',
		'icon-icon-textile': '&#xe90c;',
		'icon-visa': '&#xe901;',
		'icon-search': '&#xe90e;',
		'icon-tools': '&#xe033;',
		'icon-chat': '&#xe049;',
		'icon-heart': '&#xe04a;',
		'icon-target1': '&#xe04e;',
		'icon-global': '&#xe052;',
		'icon-target': '&#xe908;',
		'icon-mail': '&#xe905;',
		'icon-email': '&#xe905;',
		'icon-letter': '&#xe905;',
		'icon-envelope': '&#xe905;',
		'icon-contact': '&#xe905;',
		'icon-caret-down': '&#xe90b;',
		'icon-cc-mastercard': '&#xe900;',
		'icon-arrow-long-left': '&#xe909;',
		'icon-arrow-long-right': '&#xe90a;',
		'icon-facebook-with-circle': '&#xe902;',
		'icon-instagram-with-circle': '&#xe903;',
		'icon-youtube-with-circle': '&#xe904;',
		'icon-icon-search': '&#xe90e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
