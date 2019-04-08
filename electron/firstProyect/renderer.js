// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require('electron');
const products = document.querySelector('#products');
products.innerHTML = 'yeeeeeeiii';
console.log('desde render');
