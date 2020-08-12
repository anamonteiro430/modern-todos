import React, { useReducer, useState, useEffect } from 'react';
import { reducer, initialState } from './../Reducer';

export const Todos_Info = ({ state }) => {
  console.log('in todoinfo', state);
  return (
    <div className="todos-info">
      <p>{state.todos.length} items left</p>
    </div>
  );
};
