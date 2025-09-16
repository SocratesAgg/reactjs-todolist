import handleDeleteTodo from './handleDeleteTodo';

export default function handleEditTodo(todos, index, setTodoValue, setTodos) {
  const valueToBeEdited = todos[index];
  setTodoValue(valueToBeEdited);
  handleDeleteTodo(todos, index, setTodos);
}