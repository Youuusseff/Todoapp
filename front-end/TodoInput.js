import React from 'react'
import { useState } from 'react'
import {v4} from 'uuid'
export default function TodoInput({todos, setTodos}) {
    const [todo, setTodo] = useState('')
  return (
    <div className='TodoInput'>
        <input value={todo} placeholder='what are we going to do !?' onChange={e =>setTodo(e.target.value)}></input>
        <button onClick={()=>{setTodos([...todos, { id: v4(), task: todo, completed: false }]) ;setTodo('');console.log(todos)}}>ADD</button>
    </div>
  )
}
