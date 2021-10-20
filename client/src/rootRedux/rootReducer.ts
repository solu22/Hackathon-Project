import { combineReducers } from 'redux';

import { kcReducer } from '../Views/Lecture/KC/redux/kcReducer';

const rootReducer = () => {
  return combineReducers({ kc: kcReducer });
};

export default rootReducer;
