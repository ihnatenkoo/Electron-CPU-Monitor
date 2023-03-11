const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('app', {
	close: () => ipcRenderer.send('app:close'),
	minimize: () => ipcRenderer.send('app:minimize'),
});
