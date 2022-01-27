import React from 'react';
import Todo from '../models/todo.modal';

import './TodoList.css';

interface TodoListProps {
  items: Array<Todo>;
  handleDeleteItem: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { items, handleDeleteItem } = props;
  return (
    <ul>
      {items.map(item => (<li key={item.id}>
        <span>{item.text}</span>
        <button onClick={handleDeleteItem.bind(null, item.id)}>DELETE</button>
      </li>))}
    </ul>
  )
}

export default TodoList;
