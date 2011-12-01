/*
WEBCLIP-DETECT - JavaScript detection of whether a web page is running on iOS 
as a web page or a full screen web clip. 

Written in 2011 by Christopher H. Casebeer <christopher at the domain chc.name>

To the extent possible under law, the author(s) have dedicated all copyright 
and related and neighboring rights to this software to the public domain 
worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with 
this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
*/

/*global window */
/*global navigator */
var webclipDetect = (function () {
	'use strict';
	var maxBrowserSizes = {
		'iPhone': {
			portrait: 416,
			landscape: 268
		},
		'iPad': {
			portrait: 946,
			landscape: 690
		}
	};
	function getDevice() {
		var ua = String(navigator.userAgent),
			device = ua.match(/iPhone|iPod/) ? 'iPhone' : (ua.match(/iPad/) ? 'iPad' : null);
		return device;
	}
	function isWebclip() {
		var portrait = (window.orientation !== 90 && window.orientation !== -90),
			height = window.innerHeight,
			device = getDevice(),
			sizeLimits = device && maxBrowserSizes[device],
			webclip = !!device && (height > (portrait ? sizeLimits.portrait : sizeLimits.landscape));
			return webclip;
	}
	return {
		isWebclip: isWebclip,
		isIos: function () { return !!getDevice(); },
		getIosDevice: getDevice
	};
}());

