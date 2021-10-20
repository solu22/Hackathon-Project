import React, { useEffect } from 'react';
import { Button, Grid, List, ListItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../App';
import { fetchClassKcResult, getKcStatus } from '../redux/kcActions';
import { Link } from 'react-router-dom';

interface KCTeacherView {
  kcId: string;
}

export default function TeacherView({ kcId }: KCTeacherView) {
  const dispatch = useDispatch();
  const { classKcResult, kcStatus } = useSelector((state: RootState) => state.kc);

  useEffect(() => {
    setInterval(() => {
      dispatch(getKcStatus(kcId));
      dispatch(fetchClassKcResult(kcId));
    }, 6000);
  });

  return (
    <div>
      <div className="main">
        <List>
          {classKcResult.map(({ studentId, result }, index) => (
            <ListItem>
              <Grid container>
                <Grid item xs>
                  {studentId}
                </Grid>
                <Grid item xs>
                  {kcStatus[index].status}
                </Grid>
                <Grid item xs>
                  {result}
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </div>
      <Button>
        <Link to="/lectureId">Back</Link>
      </Button>
    </div>
  );
}
