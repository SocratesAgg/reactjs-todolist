import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from 'react';
import handleAddTodos from './functions/handleAddTodos';
import handleDeleteTodo from './functions/handleDeleteTodo';
import handleEditTodo from './functions/handleEditTodo';
import loadTodos from './functions/loadTodos';
import Signature from './functions/Signature';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  useEffect(() => {
    loadTodos(setTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={(newTodo) => handleAddTodos(todos, newTodo, setTodos)}
      />
      <TodoList
        handleEditTodo={(index) => handleEditTodo(todos, index, setTodoValue, setTodos)}
        handleDeleteTodo={(index) => handleDeleteTodo(todos, index, setTodos)}
        todos={todos}
      />
      <Signature />
    </>
  );
}

export default App;