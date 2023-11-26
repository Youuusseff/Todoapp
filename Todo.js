import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default function Todo({todos, setTodos}) {
  function deleteItem(todo){
    const arr = todos.filter((item) => item !== todo);
    setTodos(arr);
  }
  return (
    <div className='TodoWrapper'>
      <h1>MY TODO LIST</h1>
      <TodoInput todos = {todos} setTodos = {setTodos} />
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  )
}
