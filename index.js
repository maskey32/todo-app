const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const container = document.querySelector('#list-container');

todoButton.addEventListener('click', addTodo);
searchInput.addEventListener('input', searchTodo);

function addTodo(event){
    event.preventDefault();
    console.log('Hello');

if (todoInput.value.length) {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item-div');

    const h4Item = document.createElement('input');
    h4Item.setAttribute('class', 'p-item');
    h4Item.setAttribute('value', todoInput.value);
    h4Item.setAttribute('type', 'text');
    h4Item.setAttribute('readonly', 'readonly');


    const edit = document.createElement('button');
    edit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    edit.setAttribute('class', 'edit');

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    deleteButton.setAttribute('class', 'delete-button');

    const date = document.createElement('p');
    date.innerText = new Date().toUTCString('mm/dd/yy');
    date.setAttribute('class', 'date');

    const editDiv = document.createElement('div');
    editDiv.setAttribute('class', 'edit-div');
    
    const deleteDiv = document.createElement('div');
    deleteDiv.setAttribute('class', 'delete-div');

    const editDeleteDiv = document.createElement('div');
    editDeleteDiv.setAttribute('class', 'edit-delete');

    const rightPane = document.createElement('div');
    rightPane.setAttribute('class', 'right-pane');

    editDiv.appendChild(edit);
    deleteDiv.appendChild(deleteButton);
    
    editDeleteDiv.appendChild(editDiv);
    editDeleteDiv.appendChild(deleteDiv);
    
    rightPane.appendChild(date);
    rightPane.appendChild(editDeleteDiv);

    itemDiv.appendChild(h4Item);
    itemDiv.appendChild(rightPane);
    // itemDiv.appendChild(editDiv);
    // itemDiv.appendChild(deleteDiv);

    container.appendChild(itemDiv);

    todoInput.value = '';
    
    edit.addEventListener('click', () => {
        if (edit.innerHTML === '<i class="fa fa-pencil" aria-hidden="true"></i>') {
            h4Item.removeAttribute('readonly');
            h4Item.focus();
            console.log('edit');
            edit.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        } else {
            h4Item.setAttribute('readonly', 'readonly');
            edit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
        }
    })

    deleteButton.addEventListener('click', () => {
        container.removeChild(itemDiv);
    })
}
}

function searchTodo(event) {
    const searchValue = event.target.value.toLowerCase().trim();

    if (!h4Item.includes(searchValue)) {
        itemDiv.classList.add('hide');
    } else {
        itemDiv.classList.remove('hide');
    }

}



// function main() {}

// module.exports = { main }
