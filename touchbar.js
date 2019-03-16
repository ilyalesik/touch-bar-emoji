const { app, BrowserWindow, TouchBar } = require('electron')

const { TouchBarLabel, TouchBarButton, TouchBarSpacer, TouchBarScrubber } = TouchBar;

const {emoji} = require("./emoji");

const esc = new TouchBarButton({
    label: "esc",
    click: () => {
        app.quit();
    }
});

const scrubber = new TouchBarScrubber({
    items: emoji.map((emojiItem) => ({
        label: emojiItem
    })),
    highlight: (selectedIndex) => {
        console.log(emoji[selectedIndex]);
    }
});

const touchBar = new TouchBar({
    items: [scrubber],
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
