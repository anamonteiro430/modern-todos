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

    case 'markAsComplete':
      console.log('id, ', action.payload);
      console.log('state in, ', action.payload);
      let updateTodo = state.todos.map((todo) =>
        todo.id == action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

      console.log('in reducer, ', updateTodo);
      return {
        ...state,
        todos: updateTodo,
      };

    default:
      return state;
  }
}
