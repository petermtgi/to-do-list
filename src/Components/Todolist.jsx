import React from 'react';
import Todo from './Todo';

const Todolist = ({ todos, title }) => {
  return (
    <>
      {/* Display the title */}
      <h2>{title}</h2>
      
      {/* Map over todos array and render Todo component for each item */}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} /> 
      ))}
    </>
  );
};

export default Todolist;
