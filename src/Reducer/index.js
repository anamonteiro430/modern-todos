export const initialState = {
  todos: [
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

export function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, isCompleted: false },
        ],
      };

    default:
      return state;
  }
}
