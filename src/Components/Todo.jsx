import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed}  />
      <span>{todo.title}</span>
    </div>
  );
};

export default Todo;
