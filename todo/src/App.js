import React, { useReducer } from 'react';
import './App.css';

import { todoReducer, initialState } from './reducers/index';

import TodoList from './components/todolist/TodoList';
import TodoForm from './components/todoform/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoList todos={state.todos} />
      {
        state.editing ? (
          <TodoForm addTodoDispatch={dispatch} />
        ) : null
      }
    </div>
  );
}

export default App;
