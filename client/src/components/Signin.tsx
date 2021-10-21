import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";

interface IFormInput {
  email: string;
}

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
  const history = useHistory();
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.email === "teacher@mail.com") {
      history.push("/instructor/lecture/1");
    } else {
      history.push("/student/lecture/1");
    }
  };

  return (
    <>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="outlined"
                    color="primary"
                    label="email"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Signin;
