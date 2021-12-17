let tasks = [];
let value = '';

const form = document.querySelector('#form');
const input = document.querySelector('#input');
let deleteBtns = [];

let ul = document.createElement('ul');

function deleteItem() {
    if (deleteBtns.length) {
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tasks.splice(btn.dataset.id, 1);
                render();
            })
        })
    }
}

function render() {
    let str = '';

    tasks.forEach((task, index) => {
        str += `
            <li>
                <span>${task}</span>
                <button data-id="${index}" class="delete-btn">X</button>
            </li>
        `;
    });

    ul.innerHTML = str;
    document.body.prepend(ul);

    deleteBtns = document.querySelectorAll('.delete-btn');
    deleteItem();
}

document.addEventListener("DOMContentLoaded", render);

input.addEventListener('input', (e) => { 
    value = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (value.trim()) {
        tasks.push(value);
    }
    value = '';
    form.reset();

    render();
});
