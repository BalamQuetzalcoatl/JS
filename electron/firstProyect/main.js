// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, ipcMain} = require('electron')
const url = require('url');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, './node_modules', '.bin', 'electron')
  })
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let newProductWindow

createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    title: 'ElectronJS',
    webPreferences: {
      nodeIntegration: true
    }
  })

  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);
  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    app.quit();
  })
}

const templateMenu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New product',
        accelerator: process.platform === 'darwin' ? 'command+N' : 'Ctrl+N',
        click() {
          createNewProductWindow();
        }
      },
      {
        label: 'Remove all products',
        click() {
          mainWindow.webContents.send('products:remove-all');
        }
      }
    ]
  },
  {
    label: 'Exit',
    accelerator: process.platform === 'darwin' ? 'command+Q' : 'Ctrl+Q', // using darwin, identified that we´re using Mac os
    click() {
      app.quit();
    }
  }
]

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

createNewProductWindow = () => {
  newProductWindow = new BrowserWindow(
    {
      width: 600,
      height: 530,
      title: 'Add new product'
    }
  );
  
  newProductWindow.setMenu(null);

  newProductWindow.loadURL(url.format({
    pathname: path.join(__dirname, './views/add-product.html'),
    protocol: 'file',
    slashes: true
  }));

  newProductWindow.on('closed', () => {
    newProductWindow = null;
  });
}

if(process.env.NODE_ENV !== 'production'){
  templateMenu.push({
    label: 'DevTools',
    submenu: [
      {
        label: 'Dev Tools',
        accelerator: process.platform === 'darwin' ? 'command+D':'Ctrl+D',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools(); // focusedWindow.openDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}

ipcMain.on('product:new', (e, newProduct) => {
  mainWindow.webContents.send('product:new', newProduct);
  newProductWindow.close();
})