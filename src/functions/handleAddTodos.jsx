import persistData from './persistData';

export default function handleAddTodos(todos, newTodo, setTodos) {
  const newTodoList = [...todos, newTodo];
  persistData(newTodoList);
  setTodos(newTodoList);
}