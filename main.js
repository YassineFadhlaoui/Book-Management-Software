const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const url = require('url') 
const path = require('path')  
let $ = require('jquery');
BrowserWindow.$ = $;
let win  

function createWindow() { 
   win = new BrowserWindow({
width: 900,
height: 600,
icon: path.join(__dirname, 'icon/icon.png')
}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

app.on('ready', createWindow) 
