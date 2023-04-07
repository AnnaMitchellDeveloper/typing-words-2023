let text = "I am a web developer...";//23
let index = 0;
let speed = 100;

function typeText(){
	if (index < text.length) {
		document.querySelector("#paragraph").textContent += text.charAt(index);
		index++;
		setTimeout(typeText, speed);
	}
}
typeText();

