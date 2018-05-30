import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import { format } from 'url'

let mainWindow: BrowserWindow | null

function createWindow () {
  mainWindow = new BrowserWindow()
  const mainIndexURL = format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true,
  })
  mainWindow.loadURL(process.argv.includes('--debug') ? 'http://localhost:8080' : mainIndexURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
