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
		'icon-accommodation': '&#xe900;',
		'icon-accomodation1': '&#xe901;',
		'icon-adventure': '&#xe902;',
		'icon-airconditioncar': '&#xe903;',
		'icon-airconditioning': '&#xe904;',
		'icon-archeologycal': '&#xe905;',
		'icon-automatic': '&#xe906;',
		'icon-balcony': '&#xe907;',
		'icon-bathroom': '&#xe908;',
		'icon-beachfront': '&#xe909;',
		'icon-beachview': '&#xe90a;',
		'icon-bedroom': '&#xe90b;',
		'icon-bilinguallawyers': '&#xe90c;',
		'icon-blog': '&#xe90d;',
		'icon-breakfast': '&#xe90e;',
		'icon-calendar': '&#xe90f;',
		'icon-capacity': '&#xe910;',
		'icon-carrental': '&#xe911;',
		'icon-category': '&#xe912;',
		'icon-catering': '&#xe913;',
		'icon-chimney': '&#xe914;',
		'icon-coffeemaker': '&#xe915;',
		'icon-collective': '&#xe916;',
		'icon-deck': '&#xe917;',
		'icon-diningarea': '&#xe918;',
		'icon-directories': '&#xe919;',
		'icon-dishwasher': '&#xe91a;',
		'icon-dvd': '&#xe91b;',
		'icon-easy': '&#xe91c;',
		'icon-embasiesandconsulates': '&#xe91d;',
		'icon-embassy': '&#xe91e;',
		'icon-emergencyservices': '&#xe91f;',
		'icon-eventPlanner': '&#xe920;',
		'icon-events': '&#xe921;',
		'icon-experiences': '&#xe922;',
		'icon-flights': '&#xe923;',
		'icon-fullgym': '&#xe924;',
		'icon-garage': '&#xe925;',
		'icon-garden': '&#xe926;',
		'icon-grill': '&#xe927;',
		'icon-guide': '&#xe928;',
		'icon-gym': '&#xe929;',
		'icon-hard': '&#xe92a;',
		'icon-helicopter': '&#xe92b;',
		'icon-hostels': '&#xe92c;',
		'icon-hotels': '&#xe92d;',
		'icon-hotwater': '&#xe92e;',
		'icon-iconos-directorios-11': '&#xe92f;',
		'icon-iron': '&#xe930;',
		'icon-jacuzzi': '&#xe931;',
		'icon-kitchen': '&#xe932;',
		'icon-kitchenessentials': '&#xe933;',
		'icon-lakefront': '&#xe934;',
		'icon-lakeview': '&#xe935;',
		'icon-livingroom': '&#xe936;',
		'icon-location': '&#xe937;',
		'icon-lodges': '&#xe938;',
		'icon-manual': '&#xe939;',
		'icon-medical': '&#xe93a;',
		'icon-medium': '&#xe93b;',
		'icon-microwave': '&#xe93c;',
		'icon-minibar': '&#xe93d;',
		'icon-nature': '&#xe93e;',
		'icon-netflix': '&#xe93f;',
		'icon-oven': '&#xe940;',
		'icon-parking': '&#xe941;',
		'icon-passenger': '&#xe942;',
		'icon-patio': '&#xe943;',
		'icon-phone': '&#xe944;',
		'icon-photographer': '&#xe945;',
		'icon-pool': '&#xe946;',
		'icon-pooltable': '&#xe947;',
		'icon-private': '&#xe948;',
		'icon-refrigerator': '&#xe949;',
		'icon-Rentals': '&#xe94a;',
		'icon-rooms': '&#xe94b;',
		'icon-satelitetv': '&#xe94c;',
		'icon-sauna': '&#xe94d;',
		'icon-school': '&#xe94e;',
		'icon-smokedetector': '&#xe94f;',
		'icon-spanishschools': '&#xe950;',
		'icon-star': '&#xe951;',
		'icon-stove': '&#xe952;',
		'icon-study': '&#xe953;',
		'icon-suitcase': '&#xe954;',
		'icon-tablegames': '&#xe955;',
		'icon-tableware': '&#xe956;',
		'icon-targetshooting': '&#xe957;',
		'icon-telephone': '&#xe958;',
		'icon-thingstodo': '&#xe959;',
		'icon-thingstodo1': '&#xe95a;',
		'icon-time': '&#xe95b;',
		'icon-touristinfo': '&#xe95c;',
		'icon-tours': '&#xe95d;',
		'icon-transportation': '&#xe95e;',
		'icon-transportation1': '&#xe95f;',
		'icon-TV': '&#xe960;',
		'icon-type': '&#xe961;',
		'icon-upstairsterrance': '&#xe962;',
		'icon-venues': '&#xe963;',
		'icon-videogames': '&#xe964;',
		'icon-volunteer': '&#xe965;',
		'icon-volunteeropportunities': '&#xe966;',
		'icon-walkincloset': '&#xe967;',
		'icon-washinganddry': '&#xe968;',
		'icon-weadding': '&#xe969;',
		'icon-weddingplanners': '&#xe96a;',
		'icon-wifi': '&#xe96b;',
		'icon-workingzone': '&#xe96c;',
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
