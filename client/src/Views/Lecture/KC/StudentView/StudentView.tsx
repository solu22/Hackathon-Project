import React from "react";
import { useSelector } from "react-redux";
import { Route, useRouteMatch } from "react-router";

import { RootState } from "../../../../App";
import { QuestionLists } from "./QuestionLists";
import { ResultView } from "./ResultView";

interface StudentViewProps {
  kcId: string;
}

export const StudentView: React.FC<StudentViewProps> = ({ kcId }) => {
  const { questions } = useSelector((state: RootState) => state.kc);
  const { path } = useRouteMatch();
  return (
    <div>
      <Route exact path={`${path}/${kcId}`}>
        <QuestionLists questions={questions} kcId={kcId} />
      </Route>
      <Route exact path={`${path}/${kcId}/result`}>
        <ResultView />
      </Route>
    </div>
  );
};
