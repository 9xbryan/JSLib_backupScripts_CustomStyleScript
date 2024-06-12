/* location:
https://api.github.com/repos/9xbryan/JSLib_backupScripts_CustomStyleScript/contents/app.ai.js
https://raw.githubusercontent.com/9xbryan/JSLib_backupScripts_CustomStyleScript/main/app.ai.js
*/

function categorizeElement(element) {
		if (element.nodeName === 'IMG') return 'IMG';
		else return "noGrabText"
	}
function mouseOverHandler(e) {
	// console.log('mouse over')
	// document.body.style.backgroundColor = "Navy";
	const trg = e.target;
	// trg.classList.add('outline');
	switch (categorizeElement(trg)) {
		case 'IMG': trg.classList.add('outline'); break;
		case 'noGrabText': trg.classList.add('makeSelectable');
	}


}
function mouseOutHandler(e) {
	// console.log('mouse out')
	// document.body.style.backgroundColor = "red";
	const trg = e.target;
	switch (categorizeElement(trg)) {
		case 'IMG': trg.classList.remove('outline'); break;
		case 'noGrabText': trg.classList.add('makeSelectable') ;
	}
	// trg.classList.remove('outline');
}

window.addEventListener('mouseover', mouseOverHandler);
window.addEventListener('mouseout', mouseOutHandler);
window.addEventListener('load', e => {
	console.log('extension loaded')
});
