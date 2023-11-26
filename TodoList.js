import React, { useEffect } from 'react'
export default function TodoList({todos, setTodos}) {
  function deleteItem(todo){
    const arr = todos.filter((item) => item !== todo);
    setTodos(arr);
    }
      
  function detailsItem(item){
    
  }  

  return (
    <div className='TodoList'>
        <ul>
            {todos?.map( todo => (<li onClick={detailsItem()} key={todo.id}>{todo.task} <label><input id="checkbox" className="item" type='checkbox' value={todo.completed} onChange={()=>{todo.completed = !(todo.completed)}}></input><button id="task-button" className="item" onClick={()=>{deleteItem(todo);fetch("https://heroic-gnome-10ce91.netlify.app/delete/"+todo.id,{method : 'DELETE'})}} >Delete task</button></label></li>))}
        </ul>
    </div>
  )
  }
