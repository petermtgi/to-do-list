import './App.css';
import { useState, useEffect } from 'react';  // Import useEffect
import Todolist from './Components/Todolist';

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect hook to send request to JSONPlaceholder API and update the state
  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setTodos(data); // Update state with the fetched todos
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Log any error
      });
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="App">
      <h1>To do list</h1>
      <Todolist todos={todos} title="This is React" />
    </div>
  );
}

export default App;
