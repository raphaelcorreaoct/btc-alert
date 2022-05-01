const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindo = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  mainWindo.loadURL(`http://localhost:3000`);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
