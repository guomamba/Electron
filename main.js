var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })
    mainWindow.loadFile('index.html')
    mainWindow.on('closed',()=>{
        mainWindow = null
    })
})