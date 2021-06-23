"use strict";

document.addEventListener("contextmenu", function(e) {
	e.preventDefault();
});
document.addEventListener("wheel", function(e) {
	if (e.ctrlKey) {e.preventDefault();}
}, {passive: false});