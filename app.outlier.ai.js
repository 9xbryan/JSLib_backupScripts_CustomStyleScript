function categorizeElement(element) {
		if (element.nodeName === 'IMG') return 'IMG';
		else return element.nodeName
	}
function mouseOverHandler(e) {

	const trg = e.target;
	console.log(trg.outerHTML.match(/<([A-Z][A-Z0-9]+)\b[^>]*>/i)[0])
	switch (categorizeElement(trg)) {
		case 'IMG': element.classList.add('outline'); break;
		case 'noGrabText': element.background.color = 'red';
	}


}
function mouseOutHandler(e) {
	const trg = e.target;
	switch (categorizeElement(trg)) {
		case 'IMG': element.classList.remove('outline'); break;
		case 'noGrabText': element.background.color = 'revert';
	}


}

window.addEventListener('mouseover', mouseOverHandler);
window.addEventListener('mouseout', mouseOutHandler);
