import {useState} from 'react'



export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

        const handleAddClick = () => {
        if (!todoValue.trim()) {
            alert("Please enter a non-empty todo item.");
            return;
        }
        handleAddTodos(todoValue);
        setTodoValue('');
    }

    return (
        <header>
            <input 
                value={todoValue}
                onChange={(e) => {setTodoValue(e.target.value)}}
                placeholder= "Enter a todo task..."
            />
            <button onClick={handleAddClick}>Add</button>
        </header>
    )
}