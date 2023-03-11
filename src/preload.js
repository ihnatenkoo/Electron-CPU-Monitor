const { contextBridge, ipcRenderer } = require('electron');
const os = require('os');

contextBridge.exposeInMainWorld('app', {
	cpuInfo: () => ipcRenderer.invoke('get-cpu-info'),
	close: () => ipcRenderer.send('app:close'),
	minimize: () => ipcRenderer.send('app:minimize'),
});
