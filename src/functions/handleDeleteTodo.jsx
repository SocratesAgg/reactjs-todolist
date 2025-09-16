import persistData from './persistData';

export default function handleDeleteTodo(todos, index, setTodos) {
  const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
  persistData(newTodoList);
  setTodos(newTodoList);
}