import React, { useReducer } from 'react';
import './App.css';

import { todoReducer, initialState } from './reducers/index';

import TodoList from './components/todolist/TodoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoList todos={state.todos} />
      <button
          onClick={() => dispatch({ type: "ADD_TODO" })}>
          Add Todo
      </button>
    </div>
  );
}

export default App;
