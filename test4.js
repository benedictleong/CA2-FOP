const open = require('open');

(async () => {
    // Opens the image in the default image viewer and waits for the opened app to quit.
    await open('blackpanther.mp4', {wait: true});
    console.log('The image viewer app quit');

    // Opens the URL in the default browser.
    await open('https://drive.google.com/uc?export=download&id=15-thzsWepbTbZ7RucBQwRMItXslbBScQ');

    // Opens the URL in a specified browser.
    await open('https://drive.google.com/uc?export=download&id=15-thzsWepbTbZ7RucBQwRMItXslbBScQ', {app: 'google chrome'});

    // Specify app arguments.
    await open('https://drive.google.com/uc?export=download&id=15-thzsWepbTbZ7RucBQwRMItXslbBScQ', {app: ['google chrome', '--incognito']});
})();