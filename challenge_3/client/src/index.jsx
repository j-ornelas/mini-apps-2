import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.jsx";
import store from './store.js';
import updateBoard from './actions/board-actions';
import { Provider } from 'react-redux'

console.log("initial state: ", store.getState());



ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'));
