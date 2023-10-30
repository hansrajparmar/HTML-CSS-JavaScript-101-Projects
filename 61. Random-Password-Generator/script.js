const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFun = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

generateEl.addEventListener('click', () => {
	const length = + lengthEl.value; // + = convert into numbers
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied');
});

function generatePassword(lower, upper, number, symbol, length) {

	let generatedPassword = '';
	const typeCount = lower + upper + number + symbol;
	console.log('typeCount :', typeCount);

	const typeArray = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0]
	);

	console.log('typeArray :', typeArray);

	if (typeCount === 0) {
		return '';
	}

	for (let i = 0; i < length; i += typeCount) {
		typeArray.forEach((type) => {
			const funcName = Object.keys(type)[0];

			generatedPassword += randomFun[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);
	console.log(finalPassword);
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '~`!#$%^&*()-_+|?.,<>"{}=/';

	return symbols[Math.floor(Math.random() * symbols.length)];
}
