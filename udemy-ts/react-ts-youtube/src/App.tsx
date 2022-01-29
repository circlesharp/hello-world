import React from 'react';

import Todo from './components/Todo/Todo';

const App: React.FC = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title='test'></Todo>
    </div>
  );
};

export default App;
