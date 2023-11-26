import React from 'react'
import { useState } from 'react'
import {v4} from 'uuid'
export default function TodoInput({todos, setTodos}) {
    const [todo, setTodo] = useState()
    function fetchingItem(item){
      const itemback = {task: item, completed: false}
      fetch("https://heroic-gnome-10ce91.netlify.app/register",{method : 'POST',
      headers: {
        'content-type': 'application/json'
      },
     body: JSON.stringify(itemback)})
    }
  return (
    <div className='TodoInput'>
        <input value={todo} placeholder='what are we going to do !?' onChange={e =>setTodo(e.target.value)}></input>
        <button onClick={()=>{setTodos([...todos, { id: v4(), task: todo, completed: false }]) ;fetchingItem(todo); setTodo('');console.log(todos)}}>ADD</button>
    </div>
  )
}
