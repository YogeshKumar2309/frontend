export const addTodo = (state, text) => {
  return {
    ...state,
    todos: [...state.todos, { id: Date.now(), text: text, completed: false }],
  };
};

export const deleteTodo = (state, id) => {
  return {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  };
};

export const editTodo = (state, payload) => {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === payload.id ? { ...todo, text: payload.text } : todo
    ),
  };
};

export const completedTodo = (state, id) => {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  };
};

export const filterTodo = (state, filter) => {
  return {
    ...state,
    filter,
  };
};

export const sortTodo = (state, sort) => {
  return {
    ...state,
    sort: sort,
  };
};
