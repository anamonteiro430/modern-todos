import React, { useReducer, useState, useEffect } from 'react';
import { reducer, initialState } from './../Reducer';
import { Todo } from './Todo';
import { Todos_Info } from './Todos_Info';
import arrow from './../Images/arrow.png';

export const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoText, setTodoText] = useState('');
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

      {state.todos ? (
        state.todos.map((todo) => (
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

      <Todos_Info state={state} />
    </div>
  );
};
