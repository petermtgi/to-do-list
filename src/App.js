import './App.css';
import { useState, useEffect } from 'react';
import Todolist from './Components/Todolist';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  
  return (
    <div className="App">
      <h1>To do list</h1>
      <Todolist todos={todos} title="REACT" />
    </div>
  );
}

export default App;  