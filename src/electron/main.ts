// electron/electron.js

const path = require('path');
const {
    app,
    BrowserWindow
} = require('electron');

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1120,
        height: 768,
        minHeight: 768,
        minWidth: 1020,
        titleBarStyle: "hidden",
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        },
    });

    if (process.env.npm_lifecycle_event === 'start') {
        mainWindow.loadURL('http://localhost:3000')
    } else {
        mainWindow.loadFile('dist/index.html')
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});