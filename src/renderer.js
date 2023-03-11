window.document.addEventListener('DOMContentLoaded', () => {
	const minimizeBtn = document.querySelector('#minimize-app');
	const closeBtn = document.querySelector('#close-app');
	const cpuUsed = document.querySelector('#cpu-used');
	const cpuStatusBar = document.querySelector('#progress-inner');

	minimizeBtn.addEventListener('click', () => {
		app.minimize();
	});
	closeBtn.addEventListener('click', () => {
		app.close();
	});

	const getCpuInfo = async () => {
		const value = await app.cpuInfo();
		const currentLoad = value.toFixed(1);
		cpuUsed.textContent = `${currentLoad}%`;
		cpuStatusBar.style.width = `${currentLoad}%`;
	};

	setInterval(getCpuInfo, 2000);
});
