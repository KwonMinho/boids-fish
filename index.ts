const {app, BrowserWindow, TouchBar} = require('electron');




function createWindow(){
  let win = new BrowserWindow({
    width: 1366,
    height: 768,
    nodeIntegration: true,
  });
  win.loadFile(`../src/aquarium.html`);
}


app.whenReady().then(()=>{
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})