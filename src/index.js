const { app, BrowserWindow } = require('electron');
const path = require('path');
require('electron-reload')(__dirname);

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	mainWindow.loadFile(path.join(__dirname, 'index.html'));
	mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
	createWindow();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
