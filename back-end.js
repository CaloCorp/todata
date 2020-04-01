

/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete
}

const isNotComplete = function(todo) {
  return !isComplete(todo)
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}

const isLowPriority = function(todo) {
  return todo.priority === 1
}

const notCompleteOrderedFirst = function (todo1, todo2){

    if(isNotComplete(todo1)) {
      return -1;
    } else if(todo1.complete == todo2.complete) {
      return 0;
    } else if(isNotComplete(todo2)) {
      return 1;
    }
}
const notCompleteFirst = function(todo){

  const copyOfTodos = todo.slice(0)

return copyOfTodos.sort(notCompleteOrderedFirst)
}


const comparePriority = (todo1, todo2) => {
if (isHighPriority(todo1)){

return -1;
}
else if (isHighPriority(todo2)) {
  return 1;
}
else if(todo1.priority == todo2.priority){

return 0;
}
}
const priority2First = function (todo){

const copyofTodos = todo.slice(0)

return copyofTodos.sort(comparePriority)
}


/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function (todos) {
  return todos.map(getTodoName)
}

const namesAndPriorities = (todos) => todos.map((todo) => {
    const priority = todo.priority === 2 ? 'High' : 'Low';

    return `${todo.text} - ${priority}`
})

const justNotComplete = function (todos) {
  return todos.filter(isNotComplete)
}

const justComplete = function (todos) {
  return todos.filter(isComplete)
}

const priority2Only = function (todos) {
  return todos.filter(isHighPriority)
}

const priority1Only = function (todos) {
  return todos.filter(isLowPriority)
}

if (typeof notCompleteFirst === 'undefined') {
  notCompleteFirst = undefined;
}

if (typeof priority2First === 'undefined') {
  priority2First = undefined;
}

module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}
