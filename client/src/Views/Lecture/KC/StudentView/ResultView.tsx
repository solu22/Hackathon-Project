import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

import { Result } from '../../../../types/commonTypes';

interface ResultProps {
  result: Result;
}

export const ResultView: React.FC<ResultProps> = ({ result }) => {
  const { correct, incorrect, total, detail } = result;
  return (
    <div>
      <div>Summary</div>
      <List>
        <ListItem>
          <ListItemText primary="correct" secondary={correct} />
        </ListItem>
        <ListItem>
          <ListItemText primary="incorrect" secondary={incorrect} />
        </ListItem>
        <ListItem>
          <ListItemText primary="total" secondary={total} />
        </ListItem>
        {detail.map(({ questionId, studentChoice, correctChoice }) => (
          <div key={questionId}>
            <div>Question {questionId}</div>
            <ListItem>
              <ListItemText primary="Your Choice" secondary={studentChoice} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Correct Choice" secondary={correctChoice} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};
