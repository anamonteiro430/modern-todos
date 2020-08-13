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
      <div className="button-wrapper">
        <button
          onClick={() =>
            dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' })
          }
          style={
            state.visibilityFilter === 'SHOW_ALL'
              ? { border: '1px solid #253237' }
              : null
          }
        >
          All
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ACTIVE' })
          }
          style={
            state.visibilityFilter === 'SHOW_ACTIVE'
              ? { border: '1px solid #253237' }
              : null
          }
        >
          Active
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter: 'SHOW_COMPLETED',
            })
          }
          style={
            state.visibilityFilter === 'SHOW_COMPLETED'
              ? { border: '1px solid #253237' }
              : null
          }
        >
          Completed
        </button>
      </div>
      <div className="deleteTodosWrapper">
        <button
          className="deleteTodos"
          onClick={() => dispatch({ type: 'DELETE_COMPLETED' })}
        >
          Delete completed
        </button>
      </div>
    </div>
  );
};
