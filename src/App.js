import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
   const[todos , setTodos]=useState([]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
     <p>React todo</p>
     <TodoForm addTodo={addTodo}/>
     <TodoList todos={todos} />
    </div>
  );
}

export default App;
