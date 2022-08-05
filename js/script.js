const themes = {
	light: {
		background: "hsl(0, 0%, 100%)",
		topBgPattern: "hsl(225, 100%, 98%)",
		cardBg: "hsl(227, 47%, 96%)",
		lightText: "hsl(228, 12%, 44%)",
		darkText: "hsl(230, 17%, 14%)",
	},
	dark: {
		background: "hsl(230, 17%, 14%)",
		topBgPattern: "hsl(232, 19%, 15%)",
		cardBg: "hsl(228, 28%, 20%)",
		lightText: "hsl(228, 34%, 66%)",
		darkText: "hsl(0, 0%, 100%)",
	},
};

const body = document.querySelector("body");
let currentTheme = "light";

//checkbox
const checkbox = document.querySelector("#cb");
//toggle button for checkbox
const checkboxBtn = document.querySelector(".switch");

checkbox.addEventListener("click", handleSwitchTheme);

///get saved theme from local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
	checkbox.click();
} else {
	setColors();
}

function handleSwitchTheme() {
	// decoupled the checked nodelist item from checkbox 
	// to get true/false value
	const { checked } = checkbox;
	currentTheme = checked ? "dark" : "light";
	localStorage.setItem("theme", currentTheme);
	setColors();
}

checkboxBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    handlecheckbox();
});

function handlecheckbox() {
	checkbox.click();

	//NOTE on checkbox.click()
	
	/*The click() method

	Some day you might find yourself writing code, which relies on the event being fired. 
	To make sure the event fires, call the click() method of the checkbox element, like this:

	// document.getElementById('checkbox').click();

	However, this toggles the checked status of the checkbox, instead of specifically setting it 
	to true or false. Remember that the change event should only fire, when the checked attribute 
	actually changes.

	https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript
	*/
}



function setColors() {
	body.style.setProperty("--body-color", themes[currentTheme].background);
	body.style.setProperty("--primary-text", themes[currentTheme].darkText);
	body.style.setProperty("--secondary-text", themes[currentTheme].lightText);
	body.style.setProperty("--card-bg", themes[currentTheme].cardBg);
	body.style.setProperty("--top-bg-pattern", themes[currentTheme].topBgPattern);
}