import React, { useReducer, useState, useEffect } from 'react';
import { reducer, initialState } from './../Reducer';

export const Todos_Info = ({ state, dispatch }) => {
  console.log('inside todos info', state);
  return (
    <div className="todos-info">
      <p>
        {state.todosList.filter((m) => m.isCompleted === false).length} items
        left
      </p>
      <button
        onClick={() =>
          dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' })
        }
        className="all"
      >
        All
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ACTIVE' })
        }
        className="active"
      >
        Active
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' })
        }
        className="completed"
      >
        Completed
      </button>
    </div>
  );
};
