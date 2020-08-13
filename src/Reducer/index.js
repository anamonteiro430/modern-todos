export const initialState = {
  visibilityFilter: null,
  todosList: [
    {
      id: 1,
      text: 'building an app',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'next',
      isCompleted: false,
    },
  ],
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
};

export function todosReducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return [
        ...state,

        { id: Date.now(), text: action.payload, isCompleted: false },
      ];

    case 'MARK_COMPLETE':
      return state.map((todo) =>
        todo.id == action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    case 'DELETE_COMPLETED':
      const onlyActive = state.filter((todo) => !todo.isCompleted);
      return onlyActive;

    default:
      return state;
  }
}

export const getVisibleTodos = (todosReducer, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return todosReducer;
    case 'SHOW_COMPLETED':
      console.log('working');
      return todosReducer.filter((comp) => comp.isCompleted);
    case 'SHOW_ACTIVE':
      return todosReducer.filter((comp) => !comp.isCompleted);
    default:
      return todosReducer;
  }
};

export const todoApp = (state = {}, action) => {
  return {
    todosList: todosReducer(state.todosList, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
};
