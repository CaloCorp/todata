document.querySelector('.add-todo').addEventListener('click', () => {
const textbox = document.querySelector('.todo-input')


const todo= {}

todo.text=textbox.value
todo.id=todos.length
todo.complete=false
todo.priority = Number(document.querySelector('.priority').value)

addTodo(todo)
printTodo(todo)







})
