"use strict";

document.addEventListener("contextmenu", (evt) => {
	evt.preventDefault();
});

document.addEventListener("wheel", (evt) => {
	if (evt.ctrlKey) {
		evt.preventDefault();
	}
}, {passive: false});
