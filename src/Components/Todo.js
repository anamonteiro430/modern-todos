import React, { useReducer } from 'react';
import { reducer, initialState } from './../Reducer';
import checkmark from './../Images/checkmark.svg';
import emptyCheckmark from './../Images/empty_checkmark.svg';

export const Todo = ({ todo }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('props', todo);
  return (
    <div className="todo">
      {todo.isCompleted ? (
        <div className="completeBtn">
          <img src={checkmark} alt="marked as complete" />
        </div>
      ) : (
        <div className="completeBtn">
          <img src={emptyCheckmark} alt="to mark as complete" />
        </div>
      )}

      <p>{todo.text}</p>
    </div>
  );
};
