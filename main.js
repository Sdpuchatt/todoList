todos = []

window.onload = () => {
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) =>{
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoText = todo.value
        todo.value = ''
        todos.push(todoText)
        const todoList = document.getElementById('todo-list')
        // todoList.innerHTML = ''
        // for(i = 0; i < todos.length; i++){
        //     todoList.innerHTML += '<li>' + todos[i] + '</li>'    
        // }
        const todosTemplate = todos.map (t => '<li>' + t +'</li>')
        todoList.innerHTML = todosTemplate.join('')

    }
}