import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyle = makeStyles(() => ({
  paper: {
    margin: "30vh auto",
    minHeight: 200,
    maxHeight: 600,
    maxWidth: 400,
    padding: 32,
    paddingTop: 64,
  },
}));
const Signin: React.VFC<{}> = () => {
  const classes = useStyle();
  return (
    <>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h4">
              <Box sx={{ textAlign: "center" }}>Sign in</Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" color="primary" label="email" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Signin;
