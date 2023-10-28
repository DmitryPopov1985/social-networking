import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'

const rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>
  </React.StrictMode>
);
}
rerender(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerender(state)
})
