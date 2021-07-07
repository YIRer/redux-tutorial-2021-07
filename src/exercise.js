import { createStore } from "redux";

const initialStore = {
  counter: 0,
  text: "",
  list: [],
};

// 타입 정의
const INCREASE = "INCREASE";
const DECRESE = "DECRESE";
const CHNANGE_TEXT = "CHNANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션함수 정의
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECRESE,
});

const changeText = (text) => ({
  type: CHNANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 정의

function reducer(state = initialStore, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECRESE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case CHNANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribeStore = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
