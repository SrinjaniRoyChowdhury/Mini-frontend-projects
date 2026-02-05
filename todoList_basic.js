let todoList = [];
renderTodo();

function renderTodo() {
    let todoHtml = '';

    for(let i = 0; i < todoList.length; i++) {
        const items = todoList[i];
        const html = `<p>${items}</p>`;
        todoHtml += html; 
    }
    // console.log(todoHtml);
        document.querySelector('.js-display-list')
          .innerHTML = todoHtml;
}




function addTodo () {
    const inputELement = document.querySelector('.js-todo-name');
    const name = inputELement.value;

    todoList.push(name);
    console.log(todoList);

    inputELement.value = '';  //this makes the text box empty

    renderTodo();
}

