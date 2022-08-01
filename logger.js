let originalLogger;
originalLogger = console.log;
console.log = docLogger;

function docLogger(...args) {
	const container = document.querySelector(".logger-section");

	args.forEach((arg) => {
		const value =
			arg === null
				? arg
				: typeof arg === "object"
				? JSON.stringify(arg, null, 4)
				: arg;
		const logElem = document.createElement("pre");
		const codeElem = document.createElement("code");
		codeElem.className = "log-entry language-json";
		codeElem.innerText = value.toString();
		logElem.appendChild(codeElem);
		container.appendChild(logElem);
	});
}


function clearLog() {
	document.querySelectorAll('.log-entry').forEach(item => item.remove())
}