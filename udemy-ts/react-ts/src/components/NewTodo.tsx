import React, { FormEvent, useRef } from 'react';
import Todo from '../models/todo.modal';

import './NewTodo.css';

interface NewTodoProps {
  handleAddItem: (item: Todo) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const { handleAddItem } = props;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const todoText = textInputRef.current!.value;
    const newItem = new Todo(todoText);
    handleAddItem(newItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTodo;
