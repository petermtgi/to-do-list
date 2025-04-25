import './App.css';
import { useState, useEffect } from 'react';
import Todolist from './Components/Todolist';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch data inside useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  // Empty dependency array means it runs once when the component mounts

  return (
    <div className="App">
      <h1>To do list</h1>
      <Todolist todos={todos} title="This is React" />
    </div>
  );
}

export default App;  // Export App only once
