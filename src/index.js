import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";

import App from "./App";

import rootReducer, { rootSaga } from "./modules";
import myLogger from "./middleware/myLogger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware,
      myLogger
    )
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
