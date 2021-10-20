import React from 'react';
import { Provider } from 'react-redux';
import makeStore from './rootRedux/store';
import Dashboard from './Views/Lecture/instructor/Dashboard';

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
