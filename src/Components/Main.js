import React, { useReducer, useState, useEffect } from 'react';
import { todoApp, initialState } from './../Reducer';
import createPersistedReducer from 'use-persisted-reducer';

import { Todo } from './Todo';
import { Todos_Info } from './Todos_Info';
import arrow from './../Images/arrow.png';

export const Main = () => {
  const usePersistedReducer = createPersistedReducer('todos');
  const [state, dispatch] = usePersistedReducer(todoApp, initialState);

  const [todoText, setTodoText] = useState('');
  const myTodos = state.todosList.filter((todos) =>
    state.visibilityFilter === 'SHOW_COMPLETED'
      ? todos.isCompleted
      : state.visibilityFilter === 'SHOW_ACTIVE'
      ? !todos.isCompleted
      : todos
  );
  console.log('MYTODOS', myTodos);
  console.log('state in main', state);
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const submitting = (e) => {
    e.preventDefault();
    dispatch({ type: 'addTodo', payload: todoText });
    setTodoText('');
  };

  return (
    <div className="main">
      <div className="header">
        <img src={arrow} />
        <form onSubmit={submitting}>
          <input
            name="text"
            value={todoText}
            type="text"
            onChange={handleChange}
          />
        </form>
      </div>

      {myTodos ? (
        myTodos.map((todo) => (
          <Todo
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            dispatch={dispatch}
          />
        ))
      ) : (
        <p>You're done!</p>
      )}

      <Todos_Info state={state} dispatch={dispatch} />
    </div>
  );
};
