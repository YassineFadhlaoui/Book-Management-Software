const { app } = require('electron')
const PDFWindow = require('electron-pdf-window')
 
app.on('ready', () => {
  const win = new PDFWindow({
    width: 800,
    height: 600
  })
 uri= process.argv[2]
  win.loadURL(uri)
})
