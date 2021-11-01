import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SaveIcon from "@mui/icons-material/Save";
import AttendanceTable from "./attendance/AttendanceTable";
import KnowledgeTable from "./knowledge/KnowledgeTable";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    maxHeight: "90vh",
  },
  paper: {
    maxHeight: "90vh",
    maxWidth: 1600,
    margin: "auto",
    padding: 32,
  },
  button: {
    width: 180,
    height: "100%",
    alignSelf: "flex-end",
  },
}));

const Dashboard: React.VFC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h2">
            <Box sx={{ textAlign: "center" }}>Instructor Dashboard</Box>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                label="Lecture Title"
                color="primary"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                className={classes.button}
                variant="outlined"
                endIcon={<SaveIcon />}
              >
                Save Title
              </Button>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Lecture URL"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                className={classes.button}
                variant="contained"
                endIcon={<SaveIcon />}
              >
                Save URL
              </Button>
            </Grid>
            <Grid item xs={8}>
              <AttendanceTable />
            </Grid>
            <Grid item xs={4}>
              <KnowledgeTable />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};
export default Dashboard;
