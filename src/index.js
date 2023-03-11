const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { currentLoad } = require('systeminformation');
require('electron-reload')(__dirname);

let mainWindow;
const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 600,
		height: 500,
		maxWidth: 700,
		maxHeight: 600,
		minWidth: 400,
		minHeight: 400,
		frame: false,
		resizable: true,
		maximizable: false,
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			sandbox: false,
		},
	});

	mainWindow.loadFile(path.join(__dirname, 'index.html'));
	mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
	createWindow();

	ipcMain.on('app:close', () => {
		app.quit();
	});
	ipcMain.on('app:minimize', () => {
		mainWindow.minimize();
	});

	ipcMain.handle('get-cpu-info', async () => {
		const info = await currentLoad();
		const loadValue = info.currentLoad;
		return loadValue;
	});
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
