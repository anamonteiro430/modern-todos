import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './../Reducer';
import { Todo } from './Todo';
import { Todos_Info } from './Todos_Info';
import arrow from './../Images/arrow.png';

export const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoText, setTodoText] = useState('');

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
        state.todos.map((todo) => <Todo todo={todo} />)
      ) : (
        <p>You're done!</p>
      )}
    </div>
  );
};
