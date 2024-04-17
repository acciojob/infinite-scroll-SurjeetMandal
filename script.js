let scrollContent = document.getElementById("infi-list");

let nextEle = 1;

function renderElement() {

	for (let index = 0; index < 20; index++) {
		let element = document.createElement('li');
		element.innerHTML = 'Item' + nextEle++;
		scrollContent.appendChild(element);
	}
}

renderElement()

scrollContent.addEventListener("scroll",function(){
	if (scrollContent.scrollTop + scrollContent.clientHeight >= scrollContent.scrollHeight) {
		renderElement();
	}
})

