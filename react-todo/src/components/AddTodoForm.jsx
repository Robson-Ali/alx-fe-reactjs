import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddTodo(trimmed);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
