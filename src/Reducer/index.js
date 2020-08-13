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

/*ACTION is {type:"SET_VISIBILITY_FILTER", filter:"SHOW_COMPLETED"} */
export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log('inside visibility reducer, this is the state', state);
  console.log('inside visibility reducer, this is the action', action);
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log('visibility filter', action.filter);
      return action.filter;

    default:
      return state;
  }
};

/*STATE is {todosList: Array(2), visibilityFilter: "SHOW_ALL"} */
/*ACTION is {type:"SET_VISIBILITY_FILTER", filter:"SHOW_COMPLETED"} */
export function todosReducer(state, action) {
  console.log('inside todosReducer, this is the state', state);
  console.log('inside todosReducer, this is the action', action);
  switch (action.type) {
    case 'addTodo':
      console.log('adding todo in reducer');
      return [
        ...state,

        { id: Date.now(), text: action.payload, isCompleted: false },
      ];

    case 'markAsComplete':
      console.log('id, ', action.payload);
      console.log('state in, ', state);
      let updateTodo = state.map((todo) =>
        todo.id == action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

      console.log('in reducer, ', updateTodo);
      return updateTodo;

    case 'FILTER_ALL':
      console.log('STATE IN FIRLTERALL', state);
      return state;

    case 'filterActive':
      return state;

    case 'FILTER_COMPLETED':
      console.log('completed in reducer');

      let copy = state.todos;
      let completed = copy.filter((todo) => todo.isCompleted);
      console.log('completed in reducer', completed);
      return {
        ...state,
        visible: completed,
      };

    default:
      return state;
  }
}

export const getVisibleTodos = (todosReducer, action) => {
  console.log('inside getVisibleTodos, todosReducer, ', todosReducer);
  console.log('inside getVisibleTodos, action, ', action);
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

/*STATE is {visibilityFilter: null, todosList: Array(2)} */
/*ACTION is {type: "SET_VISIBILITY_FILTER", filter: "SHOW_COMPLETED"} */
export const todoApp = (state = {}, action) => {
  return {
    todosList: todosReducer(state.todosList, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
};
