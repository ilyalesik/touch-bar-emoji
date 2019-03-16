const { app, BrowserWindow, TouchBar } = require('electron')

const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar

// Spin button
const spin = new TouchBarButton({
    label: '🎰 ',
    backgroundColor: "#000000",
    click: () => {

    }
});

const esc = new TouchBarButton({
    label: "esc",
    click: () => {
        app.quit();
    }
});


const touchBar = new TouchBar({
    items: [
        spin
    ],
    escapeItem: esc
});


app.once('ready', () => {
    window = new BrowserWindow({
        frame: false,
        titleBarStyle: 'hiddenInset',
        width: 200,
        height: 200,
        backgroundColor: '#000000',
    });
    window.loadURL('about:blank')
    window.setTouchBar(touchBar)
});
