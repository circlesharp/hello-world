import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './models/todo.modal';

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Array<Todo>>([{
    id: 'test_id',
    text: 'test_text',
  }]);

  const handleAddItem = (newItem: Todo) => {
    setTodoList(prev => [...prev, newItem]);
  }

  const handleDeleteItem = (id: string) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo handleAddItem={handleAddItem}></NewTodo>
      <TodoList items={todoList} handleDeleteItem={handleDeleteItem}></TodoList>
    </div>
  );
}

export default App;
