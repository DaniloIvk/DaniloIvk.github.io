function createCopyButton(codeElement) {
	const button = document.createElement('button');
	button.className = 'copy-btn';
	button.title = 'Copy';

	button.addEventListener('click', function () {
		navigator.clipboard.writeText(codeElement.textContent).then(function () {
			button.classList.add('copied');
			setTimeout(function () {
				button.classList.remove('copied');
			}, 1500);
		});
	});

	return button;
}

document.querySelectorAll('pre > code').forEach(function (codeElement) {
	codeElement.parentElement.appendChild(createCopyButton(codeElement));
});
