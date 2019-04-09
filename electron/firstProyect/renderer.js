// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron');
const products = document.querySelector('#products');

ipcRenderer.on('product:new', (e, product) => {
    const productsTemplate = `
        <div class="col-4 p-2">
            <div class="card text-center">
                <div class="header">
                    <h5 class="card-title">${product.name}</h5>
                </div>
                <div class="card-body">
                    ${product.comment}
                    <hr/>
                    ${product.price}
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    `;
    products.innerHTML += productsTemplate;
     const btn = document.querySelectorAll('.btn.btn-danger');
     btn.forEach(element => {
        element.addEventListener('click', e => {
            e.target.parentElement.parentElement.parentElement.remove();
        });
     });
});

ipcRenderer.on('products:remove-all', (e, prevent) => {
    products.innerHTML = '';
});