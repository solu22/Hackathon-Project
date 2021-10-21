import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../../../App";

const useStyles = makeStyles({
  root: {
    padding: 16,
    border: "1px solid black",
    maxWidth: 400,
  },

  list: {
    padding: 16,
    border: "1px solid black",
    maxWidth: 350,
    margin: "0 auto",
    marginTop: 16,
  },

  title: {
    alignText: "center",
  },

  listItem: {
    margin: 8,
    border: "1px solid black",
    borderRadius: 6,
  },
  questionDetail: {
    margin: 8,
    padding: 8,
    border: "1px solid black",
  },
});

export const ResultView: React.FC = () => {
  const { kcAnswer, studentAnswer } = useSelector(
    (state: RootState) => state.kc
  );

  const correct = kcAnswer.filter(({ questionId, answer }) => {
    return studentAnswer[questionId] === answer;
  }).length;

  const { root, title, list, listItem, questionDetail } = useStyles();

  return (
    <div className={root}>
      <div className={title}>Summary</div>
      <List className={list}>
        <ListItem className={listItem}>
          <ListItemText primary="correct" secondary={correct} />
        </ListItem>
        <ListItem className={listItem}>
          <ListItemText
            primary="incorrect"
            secondary={kcAnswer.length - correct}
          />
        </ListItem>
        <ListItem className={listItem}>
          <ListItemText primary="total" secondary={kcAnswer.length} />
        </ListItem>
        {kcAnswer.map(({ questionId, answer }, index) => (
          <div key={questionId} className={questionDetail}>
            <div>Question {index}</div>
            <ListItem>
              <ListItemText
                primary="Your Choice"
                secondary={studentAnswer[questionId]}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Correct Choice" secondary={answer} />
            </ListItem>
          </div>
        ))}
      </List>
      <Button>
        <Link to={"/lecture"}>Back</Link>
      </Button>
    </div>
  );
};
