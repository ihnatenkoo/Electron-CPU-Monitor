window.document.addEventListener('DOMContentLoaded', () => {
	const minimizeBtn = document.querySelector('#minimize-app');
	const closeBtn = document.querySelector('#close-app');

	minimizeBtn.addEventListener('click', () => {
		app.minimize();
	});
	closeBtn.addEventListener('click', () => {
		app.close();
	});
});
