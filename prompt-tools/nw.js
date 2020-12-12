const openFolderExplorer = require('nw-programmatic-folder-select');
// The window object, to have access to the browser context, and a callback function with the user's choice
openFolderExplorer(window, (selection) => { console.log(selection); });