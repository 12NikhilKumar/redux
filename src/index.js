import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './evalutionRedux/store';
import Todo from './reducer1/todo'
import {AppContextProvider} from './reducer1context/RedicerContext'
import Home from './evalution/home';
import Cart from './evalution/cart';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AllRoutes from './evalutionrotes/allroutes'
import Navbar from './evalution/navbar'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <AllRoutes/>
      <Navbar />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
