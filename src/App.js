import React from "react";
import CounterContainers from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import { Switch, Route } from "react-router-dom";

// import Users from "./Users";
// import { UsersProvider } from "./UsersContext";
// import { createGlobalStyle } from "styled-components";

// import TodoTemplate from "./components/TodoTemplate";
// import TodoHead from "./components/TodoHead";
// import TodoList from "./components/TodoList";
// import TodoCreate from "./components/TodoCreate";
// import { TodoProvider } from "./TodoContext";

// const GlobalStyle = createGlobalStyle`
//   body{
//    background-color : #e9ecef;
//   }
// `;

export default function App() {
  return (
    <div>
      <CounterContainers />
      <hr />
      <Switch>
        <Route path="/" component={PostListPage} exact />
        <Route path="/:id" component={PostPage} />
      </Switch>

      <hr />
      <TodosContainer />
    </div>
  );
}
