import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore , combineReducers} from 'redux'
import { Provider } from 'react-redux'

const valueReducer = (state = { value: '0' }, action) => {
  switch (action.type) {

    case "setValue":
      state = {
        ...state,
        value: action.payload
      }
      break;
    case "editValue":
      state = {
        ...state,
        value: state.value + action.payload
      }
      break;
    default: {
      return {
        ...state
      }
    }
  }
  return state;
}
const store = createStore(combineReducers({valueReducer}))
store.subscribe(() => {
  console.log('current value: ', store.getState());
});

store.dispatch({
  type: "setValue",
  payload: 0
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
