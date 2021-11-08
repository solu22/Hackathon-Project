import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { kcInitialState } from '../Views/Lecture/KC/redux/kcReducer';

import createRootReducer from './rootReducer';

const initState = {
  kc: kcInitialState,
};

export default function makeStore(initialState = initState) {
  const middlewares = [thunk];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      });
    }
  }

  const store = createStore(createRootReducer(), initialState, composeEnhancers(applyMiddleware(...middlewares)));

  return store;
}
