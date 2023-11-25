import React, { useEffect } from 'react'
export default function TodoList({todos, setTodos}) {
  function deleteItem(todo){
    const arr = todos.filter((item) => item !== todo);
    setTodos(arr);
    };

  return (
    <div className='TodoList'>
        <ul>
            {todos?.map( todo => (<li key={todo.id}>{todo.task} <label><input id="checkbox" className="item" type='checkbox' value={todo.completed} onChange={()=>{todo.completed = !(todo.completed)}}></input><button id="task-button" className="item" onClick={()=>{deleteItem(todo)}} >Delete task</button></label></li>))}
        </ul>
    </div>
  )
  }
