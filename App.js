import {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then(response => response.json())
      .then(data => setTodos(data),console.log(todos))
      .catch(error => console.error(error))
  }, [])
  return (
    <div className="App">
      <body>
        <Todo todos={todos} setTodos={setTodos} />
      </body>
    </div>
  );
}

export default App;
