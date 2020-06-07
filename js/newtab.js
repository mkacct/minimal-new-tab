'use strict';

document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
});

window.matchMedia('(prefers-color-scheme: dark)').addListener(function(e) {
	setFavicon(e.matches);
});

setFavicon(window.matchMedia('(prefers-color-scheme: dark)').matches);

function setFavicon(isDark) {
	document.head.removeChild(document.getElementById('favicon'));
	var favicon = document.createElement('link');
	favicon.rel = 'icon';
	favicon.type = 'image/png';
	favicon.sizes = '32x32';
	favicon.href = 'res/' + (isDark ? 'favicon-dark.png' : 'favicon.png');
	favicon.id = 'favicon';
	document.head.appendChild(favicon);
}