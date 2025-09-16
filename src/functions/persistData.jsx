  export default function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos : newList}))
  }
