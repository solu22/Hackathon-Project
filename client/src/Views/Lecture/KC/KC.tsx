import React from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { StudentView } from './StudentView/StudentView';
import TeacherView from './TeacherView/TeacherView';

export const KC = () => {
  const { kcId } = useParams<any>();
  const { path } = useRouteMatch();
  return (
    <div>
      <Route exact path={`${path}/student/`}>
        <StudentView kcId={kcId} />
      </Route>
      <Route exact path={`${path}/teacher/`}>
        <TeacherView kcId={kcId} />
      </Route>
    </div>
  );
};
