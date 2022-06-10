const {app, BrowserWindow} = require('electron');
const { windowTime } = require('rxjs');

let win;

function createWindow(){

  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#fff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })

  win.loadURL(`file://${__dirname}/dist/algular_electron/index.html`)


  win.webContents.openDevTools()


  win.on('closed', function(){
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){

  if(process.platform !== 'darwin'){
    app.quit()
  }
})
app.on('activate', function(){
  if(win === null){
    createWindow()
  }
})
