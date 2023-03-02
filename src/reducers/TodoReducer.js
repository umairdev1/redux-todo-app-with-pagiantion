import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/TodoActions";

const initialState = {
  todos: [
    {
      text: "Learn React",
      completed: false,
    },
    {
      text: "Learn Redux",
      completed: false,
    },
    {
      text: "Build a todo app",
      completed: false,
    },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo, index) => index !== action.payload.index
        ),
      };

    default:
      return state;
  }
}

export default todoReducer;
