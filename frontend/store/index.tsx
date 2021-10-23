import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = {}, action: { type: String; payload: any }) => {
  return state;
};

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware()));
