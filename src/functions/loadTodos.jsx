export default function loadTodos(setTodos) {
  if (!localStorage) return;
  let localTodos = localStorage.getItem('todos');
  if (!localTodos) return;
  localTodos = JSON.parse(localTodos).todos;
  setTodos(localTodos);
}