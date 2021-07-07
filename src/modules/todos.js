// 타입
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// 액션 생성
let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// 초기값
const initialState = [];

// 리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);

    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id === action.id ? { ...todo, done: !todo.done } : todo;
      });

    default:
      return state;
  }
}