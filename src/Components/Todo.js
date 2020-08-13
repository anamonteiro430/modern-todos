import React from 'react';
import checkmark from './../Images/checkmark.svg';
import emptyCheckmark from './../Images/empty_checkmark.svg';

export const Todo = ({ id, text, isCompleted, dispatch }) => {
  return (
    <div>
      {isCompleted ? (
        <div className="todo">
          <div
            className="completeBtn "
            onClick={() => dispatch({ type: 'MARK_COMPLETE', payload: id })}
          >
            <img src={checkmark} alt="marked as complete" />
          </div>
          <p className="completed">{text}</p>
        </div>
      ) : (
        <div className="todo">
          <div
            className="completeBtn"
            onClick={() => dispatch({ type: 'MARK_COMPLETE', payload: id })}
          >
            <img src={emptyCheckmark} alt="to mark as complete" />
          </div>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};
