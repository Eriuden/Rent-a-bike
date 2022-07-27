import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import thunk from "redux-thunk"
import composeWithDevTools from "redux-devtools-extension"
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import reducers from './redux/reducers/BaseOfReducers';

import { getUsers } from './actions/users.actions';
import { getBikes } from './actions/bikes.actions';

//Petit défi, chercher sur le net comment créer un espace admin pour pouvoir supprimer et update les motos




const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = configureStore(reducers, {}, composedEnhancer);

store.dispatch(getUsers())
store.dispatch(getBikes())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


