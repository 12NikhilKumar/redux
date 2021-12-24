import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './todoredux/store'
import Todo from './jsontodo/todo'
import AllRoutes from './todorouter/allrouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './jsontodo/navbar';
import { AppContextProvider } from './reducercontext/appcontext';
import Counter from './reducer/counter';
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Counter/>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
