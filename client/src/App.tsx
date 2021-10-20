import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LectureDashboard from "./components/instructor/LectureDashboard";
import StudentLectureView from "./components/student/StudentLectureView";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/signin" component={LectureDashboard} />
          <PrivateRoute
            exact
            path="/signin"
            component={LectureDashboard}
            condition={true}
            redirect="/"
          />
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
    </>
  );
}

export default App;
