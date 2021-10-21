import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import makeStore from "./rootRedux/store";

import LectureDashboard from "./components/instructor/LectureDashboard";
import StudentLectureView from "./components/student/StudentLectureView";
import PrivateRoute from "./components/utils/PrivateRoute";
import Signin from "./components/Signin";

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            {/* <PrivateRoute
            exact
            path="/signin"
            component={Signin}
            condition={true}
            redirect="/"
          /> */}
            <PrivateRoute
              exact
              path="/instructor/lecture/:lectureId"
              component={LectureDashboard}
              condition={true}
              redirect="/signin"
            />
            <PrivateRoute
              exact
              path="/student/lecture/:lectureId"
              component={StudentLectureView}
              condition={true}
              redirect="/"
            />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}
export default App;
