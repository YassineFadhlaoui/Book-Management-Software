const { app } = require('electron')
const PDFWindow = require('electron-pdf-window')
const path = require('path')
app.on('ready', () => {
  const win = new PDFWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon/viewer.png')
  })
 uri= process.argv[2]
  win.loadURL(uri)
})
